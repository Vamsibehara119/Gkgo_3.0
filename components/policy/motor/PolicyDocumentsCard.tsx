import { FileText, Download, ExternalLink } from 'lucide-react';

export default function PolicyDocumentsCard({ documents }: { documents: any[] }) {
  return (
    <div className="bg-white p-5 lg:p-8 rounded-2xl lg:rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-start mb-1 lg:mb-4">
        <div className="flex items-center gap-2">
          <div className="hidden lg:block p-2 bg-red-50 rounded-full">
            <FileText className="w-5 h-5 text-red-600" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-lg lg:text-xl">Policy Documents</h3>
            <p className="hidden lg:block text-xs text-gray-400">Download your policy documents below.</p>
          </div>
        </div>
        {/* Mobile Header Button */}
        <button className="lg:hidden bg-zinc-800 text-white px-4 py-1.5 rounded-full text-[10px] font-bold">
          Download all
        </button>
      </div>
      <p className="lg:hidden text-[10px] text-gray-400 mb-6">Manage your documents.</p>

      <div className="space-y-4 lg:space-y-5 mb-8 lg:mb-6">
        {documents.map((doc, idx) => (
          <div key={idx} className="flex justify-between items-center group">
            <span className="text-sm font-medium text-gray-600 lg:text-gray-800">
              {doc.name}
            </span>
            {/* Mobile Icon (Blue Link) vs Desktop Icon (Blue Box) */}
            <div className="p-1.5 lg:bg-blue-50 rounded-md">
              <ExternalLink className="w-4 h-4 text-blue-500 lg:hidden" />
              <Download className="hidden lg:block w-4 h-4 text-blue-500" />
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Footer Button */}
      <button className="hidden lg:block w-full bg-red-600 text-white py-3 rounded-lg font-bold text-sm transition-colors hover:bg-red-700">
        Download all
      </button>
    </div>
  );
}