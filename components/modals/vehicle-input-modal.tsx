import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface VehicleData {
  make: string;
  model: string;
  year: string;
  color: string;
  occupied: string;
  licensePlate: string;
  other: string;
}

interface VehicleInputModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (value: string) => void;
  title: string;
}

export function VehicleInputModal({ isOpen, onClose, onSubmit, title }: VehicleInputModalProps) {
  const [vehicles, setVehicles] = useState<VehicleData[]>([{
    make: "",
    model: "",
    year: "",
    color: "",
    occupied: "",
    licensePlate: "",
    other: "",
  }]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const addVehicle = () => {
    setVehicles([...vehicles, {
      make: "",
      model: "",
      year: "",
      color: "",
      occupied: "",
      licensePlate: "",
      other: "",
    }]);
  };

  const removeVehicle = (index: number) => {
    setVehicles(vehicles.filter((_, i) => i !== index));
  };

  const updateVehicle = (index: number, field: keyof VehicleData, value: string) => {
    const updatedVehicles = [...vehicles];
    updatedVehicles[index] = { ...updatedVehicles[index], [field]: value };
    setVehicles(updatedVehicles);
  };

  const resetForm = () => {
    setVehicles([{
      make: "",
      model: "",
      year: "",
      color: "",
      occupied: "",
      licensePlate: "",
      other: "",
    }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const descriptions = vehicles
      .map(v => `Vehicle: {Year:${v.year ? v.year : "Unk"}, Make:${v.make ? v.make : "Unk"}, Model:${v.model ? v.model : "Unk"}, Color:${v.color ? v.color : "Unk"}, LP:${v.licensePlate ? v.licensePlate : "Unk"}, Occ:${v.occupied ? v.occupied : "Unk"}, Other:${v.other ? v.other : ""}}`.trim())
      .join(" | ");
    
    if (descriptions) {
      onSubmit(descriptions);
      resetForm();
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center">
            {title}
            <Button type="button" variant="outline" onClick={addVehicle}>
              + Add Vehicle
            </Button>
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="space-y-4">
              {index > 0 && (
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium">Vehicle {index + 1}</h3>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    className="text-red-500 h-8"
                    onClick={() => removeVehicle(index)}
                  >
                    Remove
                  </Button>
                </div>
              )}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm">Color</label>
                  <Input
                    value={vehicle.color}
                    onChange={(e) => updateVehicle(index, 'color', e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e)}
                    placeholder="Vehicle color"
                    autoFocus={index === 0}
                  />
                </div>
                <div>
                  <label className="text-sm">Year</label>
                  <Input
                    value={vehicle.year}
                    onChange={(e) => updateVehicle(index, 'year', e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e)}
                    placeholder="Year"
                  />
                </div>
                <div>
                  <label className="text-sm">Make</label>
                  <Input
                    value={vehicle.make}
                    onChange={(e) => updateVehicle(index, 'make', e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e)}
                    placeholder="Vehicle make"
                  />
                </div>
                <div>
                  <label className="text-sm">Model</label>
                  <Input
                    value={vehicle.model}
                    onChange={(e) => updateVehicle(index, 'model', e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e)}
                    placeholder="Vehicle model"
                  />
                </div>
                <div>
                  <label className="text-sm">Occupied</label>
                  <Input
                    type="number"
                    value={vehicle.occupied}
                    onChange={(e) => updateVehicle(index, 'occupied', e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e)}
                    placeholder="Number of occupants"
                  />
                </div>
                <div>
                  <label className="text-sm">License Plate</label>
                  <Input
                    value={vehicle.licensePlate}
                    onChange={(e) => updateVehicle(index, 'licensePlate', e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e)}
                    placeholder="License plate"
                  />
                </div>
                <div className="col-span-2">
                  <label className="text-sm">Other</label>
                  <Input
                    value={vehicle.other}
                    onChange={(e) => updateVehicle(index, 'other', e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e)}
                    placeholder="Additional details"
                  />
                </div>
              </div>
            </div>
          ))}
          <DialogFooter>
            <Button type="submit">Submit All</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
