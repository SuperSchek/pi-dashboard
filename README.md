## pi-dashboard

This is a small REST API built using nodejs and express. It takes a post request with an audiofile which will then convert the received file to 128kbps and upload it to AWS S3. After this it will return an object containing the URL to the converted file on S3. Meant for deployment on a Raspberry Pi 3 (requires manual install of FFMPEG on the Pi).

The following enviroment variables should be set:

- NODE_ENV=  #Should be set to production on production, can be left empty otherwise
- AWS_S3_BUCKET_NAME=  #Name of S3 bucket
- AWS_S3_USER_KEY=  #AWS User key with the proper permissions
- AWS_S3_USER_SECRET=  #AWS User secret with the proper permissions

### Install the app as a service that starts on boot:
#### 1. Create .service file and save it
```sudo nano /etc/systemd/system/pi-dashboard.service```

#### 2. Give it the following contents:
```
[Unit]
Description=Pi Dashboard
After=network-online.target

[Service]
Type=simple
User=%i
ExecStart=/usr/bin/node /home/pi/apps/pi-dashboard/index.js

[Install]
WantedBy=multi-user.target
```
#### 3. Reload systemctl deamon
```sudo systemctl daemon-reload```

#### 4. Enable the app to be started on boot
```sudo systemctl enable pi-dashboard```

#### 5. Start the service and test if it works
```sudo service pi-dashboard start```
