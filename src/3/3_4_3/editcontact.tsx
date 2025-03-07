import { useState, useEffect } from 'react';
import { Contact } from './App';

export default function EditContact({
  initialData,
  onSave
}: {
  initialData: Contact;
  onSave: (data: Contact) => void;
}) {
  const [name, setName] = useState(initialData.name);
  const [email, setEmail] = useState(initialData.email);

  // Обновляем поля при смене initialData
  useEffect(() => {
    setName(initialData.name);
    setEmail(initialData.email);
  }, [initialData]);

  return (
    <section>
      <label>
        Name:{' '}
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        Email:{' '}
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <button onClick={() => {
        const updatedData = {
          id: initialData.id,
          name,
          email
        };
        onSave(updatedData);
      }}>
        Save
      </button>
      <button onClick={() => {
        setName(initialData.name);
        setEmail(initialData.email);
      }}>
        Reset
      </button>
    </section>
  );
}
