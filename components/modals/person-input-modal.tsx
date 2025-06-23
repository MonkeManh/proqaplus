import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface PersonData {
  race: string;
  gender: string;
  clothing: string;
  age: string;
  dob: string;
  demeanor: string;
  name: string;
  relationship: string;
  address: string;
  phoneNumber: string;
  height: string;
  weight: string;
  hair: string;
  otherCharacteristics: string;
  eyeColor: string;
  complexion: string;
}

interface PersonInputModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (value: string) => void;
  title: string;
}

export function PersonInputModal({
  isOpen,
  onClose,
  onSubmit,
  title,
}: PersonInputModalProps) {
  const defaultPersonData: PersonData = {
    race: "",
    gender: "",
    clothing: "",
    age: "",
    dob: "",
    demeanor: "",
    name: "",
    relationship: "",
    address: "",
    phoneNumber: "",
    height: "",
    weight: "",
    hair: "",
    otherCharacteristics: "",
    eyeColor: "",
    complexion: "",
  };

  const [persons, setPersons] = useState<PersonData[]>([defaultPersonData]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const addPerson = () => {
    setPersons([...persons, defaultPersonData]);
    setCurrentIndex(persons.length);
  };

  const removePerson = () => {
    const newPersons = persons.filter((_, i) => i !== currentIndex);
    setPersons(newPersons);
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const nextPerson = () => {
    if (currentIndex < persons.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousPerson = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const updatePerson = (
    index: number,
    field: keyof PersonData,
    value: string
  ) => {
    const updatedPersons = [...persons];
    updatedPersons[index] = { ...updatedPersons[index], [field]: value };
    setPersons(updatedPersons);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const descriptions = persons
      .map((person) =>
        `Subject: {Gender:${person.gender}, Race:${person.race}, Age:${person.age}, DOB:${person.dob}, Height:${person.height}, Weight:${person.weight}, Hair:${person.hair}, EyeColor:${person.eyeColor}, Complexion:${person.complexion}, Clothing:${person.clothing}, Demeanor:${person.demeanor}, Name:${person.name}, Relationship:${person.relationship}, Address:${person.address}, Phone:${person.phoneNumber}, Other:${person.otherCharacteristics}}`.trim()
      )
      .join(" | ");

    if (descriptions) {
      onSubmit(descriptions);
      // Reset the form
      setPersons([defaultPersonData]);
      setCurrentIndex(0);
      onClose();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent,
  ) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span>{title}</span>
              <span className="text-sm text-muted-foreground">
                Subject {currentIndex + 1} of {persons.length}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={previousPerson}
                disabled={currentIndex === 0}
              >
                Previous
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={nextPerson}
                disabled={currentIndex === persons.length - 1}
              >
                Next
              </Button>
              <Button type="button" variant="outline" onClick={addPerson}>
                + Add
              </Button>
              {persons.length > 1 && (
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={removePerson}
                >
                  Remove
                </Button>
              )}
            </div>
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm">Race</label>
                <Select
                  value={persons[currentIndex].race}
                  onValueChange={(value) =>
                    updatePerson(currentIndex, "race", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select race" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="White">White</SelectItem>
                    <SelectItem value="Black">Black</SelectItem>
                    <SelectItem value="Hispanic">Hispanic</SelectItem>
                    <SelectItem value="Pacific Islander">Pacific Islander</SelectItem>
                    <SelectItem value="Native American">Native American</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm">Gender</label>
                <Select
                  value={persons[currentIndex].gender}
                  onValueChange={(value) =>
                    updatePerson(currentIndex, "gender", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm">Clothing</label>
                <Input
                  value={persons[currentIndex].clothing}
                  onChange={(e) =>
                    updatePerson(currentIndex, "clothing", e.target.value)
                  }
                  onKeyDown={(e) =>
                    handleKeyDown(e)
                  }
                  placeholder="Clothing description"
                />
              </div>
              <div>
                <label className="text-sm">Age (Years)</label>
                <Input
                  type="number"
                  value={persons[currentIndex].age}
                  onChange={(e) =>
                    updatePerson(currentIndex, "age", e.target.value)
                  }
                  onKeyDown={(e) => handleKeyDown(e)}
                  placeholder="Age"
                />
              </div>
              <div>
                <label className="text-sm">DOB</label>
                <Input
                  type="date"
                  value={persons[currentIndex].dob}
                  onChange={(e) =>
                    updatePerson(currentIndex, "dob", e.target.value)
                  }
                  onKeyDown={(e) => handleKeyDown(e)}
                />
              </div>
              <div>
                <label className="text-sm">Demeanor</label>
                <Input
                  value={persons[currentIndex].demeanor}
                  onChange={(e) =>
                    updatePerson(currentIndex, "demeanor", e.target.value)
                  }
                  onKeyDown={(e) =>
                    handleKeyDown(e)
                  }
                  placeholder="Demeanor"
                />
              </div>
              <div>
                <label className="text-sm">Name</label>
                <Input
                  value={persons[currentIndex].name}
                  onChange={(e) =>
                    updatePerson(currentIndex, "name", e.target.value)
                  }
                  onKeyDown={(e) => handleKeyDown(e)}
                  placeholder="Full name"
                />
              </div>
              <div>
                <label className="text-sm">Relationship</label>
                <Input
                  value={persons[currentIndex].relationship}
                  onChange={(e) =>
                    updatePerson(currentIndex, "relationship", e.target.value)
                  }
                  onKeyDown={(e) =>
                    handleKeyDown(e)
                  }
                  placeholder="Relationship"
                />
              </div>
              <div>
                <label className="text-sm">Height</label>
                <Input
                  value={persons[currentIndex].height}
                  onChange={(e) =>
                    updatePerson(currentIndex, "height", e.target.value)
                  }
                  onKeyDown={(e) => handleKeyDown(e)}
                  placeholder="Height"
                />
              </div>
              <div>
                <label className="text-sm">Weight</label>
                <Input
                  value={persons[currentIndex].weight}
                  onChange={(e) =>
                    updatePerson(currentIndex, "weight", e.target.value)
                  }
                  onKeyDown={(e) => handleKeyDown(e)}
                  placeholder="Weight"
                />
              </div>
              <div>
                <label className="text-sm">Hair</label>
                <Input
                  value={persons[currentIndex].hair}
                  onChange={(e) =>
                    updatePerson(currentIndex, "hair", e.target.value)
                  }
                  onKeyDown={(e) => handleKeyDown(e)}
                  placeholder="Hair color/length/style"
                />
              </div>
              <div>
                <label className="text-sm">Eye Color</label>
                <Input
                  value={persons[currentIndex].eyeColor}
                  onChange={(e) =>
                    updatePerson(currentIndex, "eyeColor", e.target.value)
                  }
                  onKeyDown={(e) => handleKeyDown(e)}
                  placeholder="Eye color"
                />
              </div>
              <div>
                <label className="text-sm">Complexion</label>
                <Input
                  value={persons[currentIndex].complexion}
                  onChange={(e) =>
                    updatePerson(currentIndex, "complexion", e.target.value)
                  }
                  onKeyDown={(e) =>
                    handleKeyDown(e)
                  }
                  placeholder="Complexion"
                />
              </div>
              <div className="col-span-2">
                <label className="text-sm">Other Characteristics</label>
                <Input
                  value={persons[currentIndex].otherCharacteristics}
                  onChange={(e) =>
                    updatePerson(
                      currentIndex,
                      "otherCharacteristics",
                      e.target.value
                    )
                  }
                  onKeyDown={(e) =>
                    handleKeyDown(e)
                  }
                  placeholder="Additional characteristics"
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Submit All ({persons.length} subjects)</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
