import { ListItem, Button } from './ContactListItem.styled';

export const ContactListItem = ({ contacts, removeContact }) => {
  return (
    <>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          {name}: {number}
          <Button type="submit" onClick={() => removeContact(id)}>
            Delete
          </Button>
        </ListItem>
      ))}
    </>
  );
};
