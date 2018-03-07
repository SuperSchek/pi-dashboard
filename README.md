## pi-dashboard

Small Node.JS application that displays some monitoring information and provides easy access to the apps that are running on my Raspberry Pi 3. Preferably runs on port 80.

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
