const text = `
User: kirill_ryaska
Email: kirill.dev@example.com
Backup email: test-user_2026@gmail.com

Phone numbers:
+31 6 12345678
+7 (999) 123-45-67
8-800-555-35-35

Dates:
17.06.2026
2026-06-17
01/01/2025

URLs:
https://google.com
http://localhost:3000
https://api.example.com/v1/users/123

UUIDs:
550e8400-e29b-41d4-a716-446655440000
6ba7b810-9dad-11d1-80b4-00c04fd430c8

Prices:
100$
€250
999.99 EUR
15 000 RUB

IP addresses:
192.168.1.1
10.0.0.25
255.255.255.255

Order IDs:
ORD-12345
ORD-98765
ORDER-11111

Tags:
#javascript
#nodejs
#typescript
#react

Files:
report.pdf
image.png
archive.tar.gz
script.js
index.d.ts

Mixed text:
User 123 bought 5 items for 299$.
User 456 bought 12 items for 1599$.
User 789 bought 1 item for 50$.

Coordinates:
52.3676, 4.9041
40.7128, -74.0060

Hex colors:
#FFFFFF
#000000
#FF5733
#1A2B3C

Credit cards:
4111111111111111
5555555555554444

Random strings:
abc123
ABC_456
test-test
hello.world
foo_bar_baz
`

console.log(text.match(/[a-z]/))