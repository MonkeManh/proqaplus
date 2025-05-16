export default function ResponseLevels() {
  return (
    <section className="py-16 flex justify-center bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-2">Response Levels</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ProQA Plus uses standardized response levels to ensure appropriate resource allocation
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-card rounded-lg border shadow-sm p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                O
              </div>
              <h3 className="text-xl font-semibold">Omega (Ω)</h3>
            </div>
            <p className="text-muted-foreground">
              Lowest priority response. Typically handled by telephone advice or referral to other services without
              dispatching emergency units.
            </p>
          </div>

          <div className="bg-card rounded-lg border shadow-sm p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">
                A
              </div>
              <h3 className="text-xl font-semibold">Alpha (A)</h3>
            </div>
            <p className="text-muted-foreground">
              Low priority response. Basic life support (BLS) response, typically without lights and sirens.
              Non-emergency transport.
            </p>
          </div>

          <div className="bg-card rounded-lg border shadow-sm p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 font-bold">
                B
              </div>
              <h3 className="text-xl font-semibold">Bravo (B)</h3>
            </div>
            <p className="text-muted-foreground">
              Medium-low priority. BLS response with possible ALS (Advanced Life Support) assessment. May use lights and
              sirens depending on circumstances.
            </p>
          </div>

          <div className="bg-card rounded-lg border shadow-sm p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 font-bold">
                C
              </div>
              <h3 className="text-xl font-semibold">Charlie (C)</h3>
            </div>
            <p className="text-muted-foreground">
              Medium-high priority. ALS response with lights and sirens. Used for potentially life-threatening
              conditions requiring advanced care.
            </p>
          </div>

          <div className="bg-card rounded-lg border shadow-sm p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-bold">
                D
              </div>
              <h3 className="text-xl font-semibold">Delta (D)</h3>
            </div>
            <p className="text-muted-foreground">
              High priority. Full ALS response with lights and sirens. Used for serious, life-threatening emergencies
              requiring immediate intervention.
            </p>
          </div>

          <div className="bg-card rounded-lg border shadow-sm p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold">
                E
              </div>
              <h3 className="text-xl font-semibold">Echo (E)</h3>
            </div>
            <p className="text-muted-foreground">
              Highest priority. Maximum response with multiple units, often including specialized teams. Used for
              critical life-threatening situations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
