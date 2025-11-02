# Redux Usage Examples

## Importing Hooks and Actions

```typescript
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setUser, setUserAddress, clearUser } from '@/store/slices/userSlice';
```

## Reading State in Components

```typescript
'use client';

import { useAppSelector } from '@/store/hooks';

export function UserProfile() {
  const user = useAppSelector((state) => state.user);

  return (
    <div>
      <p>Name: {user.userName}</p>
      <p>Email: {user.email}</p>
      <p>Address: {user.userAddress}</p>
      <img src={user.avatar} alt="Avatar" />
    </div>
  );
}
```

## Dispatching Actions

```typescript
'use client';

import { useAppDispatch } from '@/store/hooks';
import { setUser, setUserAddress } from '@/store/slices/userSlice';

export function UpdateUserButton() {
  const dispatch = useAppDispatch();

  const handleUpdateUser = () => {
    // Update entire user object
    dispatch(setUser({
      userAddress: '0x123...',
      avatar: 'https://example.com/avatar.jpg',
      userName: 'John Doe',
      email: 'john@example.com'
    }));
  };

  const handleUpdateAddress = () => {
    // Update only the address
    dispatch(setUserAddress('0x456...'));
  };

  const handleClearUser = () => {
    dispatch(clearUser());
  };

  return (
    <div>
      <button onClick={handleUpdateUser}>Update User</button>
      <button onClick={handleUpdateAddress}>Update Address</button>
      <button onClick={handleClearUser}>Clear User</button>
    </div>
  );
}
```

## Available Actions

- `setUser(userData)` - Set all user fields at once
- `setUserAddress(address)` - Update only user address
- `setAvatar(avatarUrl)` - Update only avatar
- `setUserName(name)` - Update only username
- `setEmail(email)` - Update only email
- `clearUser()` - Clear all user data
