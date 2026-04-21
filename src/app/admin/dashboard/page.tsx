import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import LogoutButton from "./LogoutButton";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("admin_auth");

  if (!auth || auth.value !== "1") {
    redirect("/admin");
  }

  let inquiries: Awaited<ReturnType<typeof prisma.inquiry.findMany>> = [];
  let dbError: string | null = null;
  try {
    inquiries = await prisma.inquiry.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (err) {
    dbError = err instanceof Error ? `${err.name}: ${err.message}` : String(err);
    console.error("Dashboard DB error:", err);
  }

  if (dbError) {
    return (
      <div className="min-h-screen bg-gray-950 text-white p-8">
        <div className="max-w-3xl mx-auto bg-red-950/40 border border-red-800 rounded-2xl p-6">
          <h1 className="text-xl font-bold text-red-300 mb-2">Database connection failed</h1>
          <pre className="text-xs text-red-200 whitespace-pre-wrap break-all">{dbError}</pre>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Inquiries Dashboard</h1>
            <p className="text-gray-400 text-sm mt-1">Total: {inquiries.length} inquiries</p>
          </div>
          <LogoutButton />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard label="Total" value={inquiries.length} />
          <StatCard label="Online" value={inquiries.filter((i) => i.consultationType === "Online").length} />
          <StatCard label="Offline" value={inquiries.filter((i) => i.consultationType === "Offline").length} />
          <StatCard label="Today" value={inquiries.filter((i) => {
            const today = new Date().toDateString();
            return new Date(i.createdAt).toDateString() === today;
          }).length} />
        </div>

        {/* Table */}
        {inquiries.length === 0 ? (
          <div className="text-center py-20 text-gray-500">No inquiries yet.</div>
        ) : (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-800 bg-gray-800/50">
                    <th className="text-left px-4 py-3 text-gray-400 font-medium">#</th>
                    <th className="text-left px-4 py-3 text-gray-400 font-medium">Name</th>
                    <th className="text-left px-4 py-3 text-gray-400 font-medium">WhatsApp</th>
                    <th className="text-left px-4 py-3 text-gray-400 font-medium">DOB</th>
                    <th className="text-left px-4 py-3 text-gray-400 font-medium">Time</th>
                    <th className="text-left px-4 py-3 text-gray-400 font-medium">Place</th>
                    <th className="text-left px-4 py-3 text-gray-400 font-medium">Gender</th>
                    <th className="text-left px-4 py-3 text-gray-400 font-medium">Type</th>
                    <th className="text-left px-4 py-3 text-gray-400 font-medium">Source</th>
                    <th className="text-left px-4 py-3 text-gray-400 font-medium">Received</th>
                  </tr>
                </thead>
                <tbody>
                  {inquiries.map((inq, idx) => (
                    <tr key={inq.id} className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                      <td className="px-4 py-3 text-gray-500">{inquiries.length - idx}</td>
                      <td className="px-4 py-3 text-white font-medium">{inq.parentName}</td>
                      <td className="px-4 py-3">
                        <a
                          href={`https://wa.me/${inq.whatsapp.replace(/\D/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-400 hover:text-green-300 underline"
                        >
                          {inq.whatsapp}
                        </a>
                      </td>
                      <td className="px-4 py-3 text-gray-300">{inq.dob}</td>
                      <td className="px-4 py-3 text-gray-300">{inq.tob || "—"}</td>
                      <td className="px-4 py-3 text-gray-300">{inq.pob}</td>
                      <td className="px-4 py-3 text-gray-300">{inq.gender || "—"}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          inq.consultationType === "Online"
                            ? "bg-blue-900/50 text-blue-300"
                            : inq.consultationType === "Offline"
                            ? "bg-purple-900/50 text-purple-300"
                            : "bg-gray-800 text-gray-400"
                        }`}>
                          {inq.consultationType || "—"}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-300">{inq.source}</td>
                      <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                        {new Date(inq.createdAt).toLocaleString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
      <p className="text-gray-400 text-xs uppercase tracking-wider">{label}</p>
      <p className="text-3xl font-bold text-white mt-1">{value}</p>
    </div>
  );
}
