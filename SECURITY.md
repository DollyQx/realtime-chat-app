# Security Policy

## Reporting Vulnerabilities

If you discover a security vulnerability within `realtime-chat-app`, please submit your report privately to the maintainers.

## Security Practices

1. **Authentication & Session Tokens**:
   - JWT secrets (`JWT_SECRET`) must be stored in `.env` files and kept secret. Passwords are salted and hashed using `bcryptjs`.
2. **WebSocket Realtime Security**:
   - Socket connections undergo JWT token authentication before granting channel access.
