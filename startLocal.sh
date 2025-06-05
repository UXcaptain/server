#!/bin/sh
set -e


npx prisma db push --skip-generate

echo "Starting application"
exec npm run start