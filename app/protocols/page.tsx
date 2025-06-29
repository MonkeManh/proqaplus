"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import ProtocolList from "@/components/protocols/protocol-list"
import { emsComplaints } from "@/data/protocols/emsProtocols"
import { fireProtocols } from "@/data/protocols/fireProtocols"
import { policeProtocols } from "@/data/protocols/policeProtocols"

export default function ProtocolsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedProtocol, setExpandedProtocol] = useState<string | null>(null)

  // Filter protocols based on search query
  const filteredEMSProtocols = emsComplaints.filter(
    (protocol) =>
      protocol.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      protocol.protocol.toString().includes(searchQuery),
  )


  // Filter Fire and Police protocols
  const filteredFireProtocols = fireProtocols.filter(
    (protocol) =>
      protocol.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      protocol.protocol.toString().includes(searchQuery),
  )

  const filteredPoliceProtocols = policeProtocols.filter(
    (protocol) =>
      protocol.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      protocol.protocol.toString().includes(searchQuery),
  )

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-3xl font-bold mb-6">Emergency Response Protocols</h1>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search protocols by name or number..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <Tabs defaultValue="ems" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="ems" className="flex-1">
              EMS Protocols
            </TabsTrigger>
            <TabsTrigger value="fire" className="flex-1">
              Fire Protocols
            </TabsTrigger>
            <TabsTrigger value="police" className="flex-1">
              Police Protocols
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ems">
            <ProtocolList
              title="Emergency Medical Service Protocols"
              complaints={filteredEMSProtocols}
              type="EMS"
              expandedProtocol={expandedProtocol}
              setExpandedProtocol={setExpandedProtocol}
            />
          </TabsContent>

          <TabsContent value="fire">
            <ProtocolList
              title="Fire Service Protocols"
              complaints={filteredFireProtocols}
              type="Fire"
              expandedProtocol={expandedProtocol}
              setExpandedProtocol={setExpandedProtocol}
            />
          </TabsContent>

          <TabsContent value="police">
            <ProtocolList
              title="Law Enforcement Protocols"
              complaints={filteredPoliceProtocols}
              type="Police"
              expandedProtocol={expandedProtocol}
              setExpandedProtocol={setExpandedProtocol}
            />
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </main>
  )
}
