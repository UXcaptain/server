#!/bin/sh
set -e


npx prisma db push --accept-data-loss --skip-generate

echo "Starting application"
exec npm run start