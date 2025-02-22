import { Person } from "./data";

export function getImageUrl(person: Person) {
    return (
         person.imageId + '.jpg'
    );
}
