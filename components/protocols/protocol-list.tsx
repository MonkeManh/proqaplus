import ProtocolCard from "./protocol-card"

interface ProtocolListProps {
  title: string
  complaints: any[]
  type: "EMS" | "Fire" | "Police"
  expandedProtocol: string | null
  setExpandedProtocol: (protocol: string | null) => void
}

export default function ProtocolList({
  title,
  complaints,
  type,
  expandedProtocol,
  setExpandedProtocol,
}: ProtocolListProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-muted-foreground">
          {complaints.length} protocol{complaints.length !== 1 ? "s" : ""}
        </p>
      </div>

      {complaints.length > 0 ? (
        complaints.map((complaint) => (
          <ProtocolCard
            key={`${type}-${complaint.protocol}`}
            complaint={complaint}
            type={type}
            isExpanded={expandedProtocol === `${type}-${complaint.protocol}`}
            setExpandedProtocol={setExpandedProtocol}
          />
        ))
      ) : (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No {type} protocols found matching your search.</p>
        </div>
      )}
    </div>
  )
}
