#!/usr/bin/env bash
echo "Building the project"
npm run build
echo "Done building!"

echo "Uploading files to FTP server..."
ncftpput -v -R -u "webadmin@czarnakompaniapoznan.pl" ftp.czarnakompaniapoznan.pl public_html dist/*
echo "All done!"