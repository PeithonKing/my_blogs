---
layout: ../../layouts/post.astro
title: "Blynk IoT: Getting Started"
pubDate: 2021-12-09
description: "Blynk is a popular IoT platform that enables easy cloud connectivity for devices, allowing them to be operated from anywhere. Using NodeMCU and the Arduino IDE, this tutorial will show how to program and utilize Blynk for coordinated device communication."
author: "Aritra Mukhopadyay"
excerpt: "Start your First Blynk 2.0 Project!"
image:
  src: /my_blogs/images/getting-started-with-blynk2.0-banner.png
  alt: "Cover Image"
tags: ["robotics", "IoT", "Blynk", "NodeMCU", "Arduino"]
show: true
# readingTime: 6
---


Here we will learn how to create our first project on the Blynk IoT platform. We will connect an LED to some pin on the NodeMCU. Then we will be able to controll it both through the blynk mobile app and the web portal through computers.

We will use **NodeMCU** throughout this tutorial. It is a WiFi capable Development Board based on the *ESP8266* microchip.

<a name="TOP"></a>This Tutorial contains:

1. [Account](#Account)
2. [Templates](#Templates)
    * [What are Templates?](#What_are_Templates)
    * [How to Create Templates?](#How_to_Create_Templates)
3. [Datastreams](#Datastreams)
    * [What are Datastreams?](#What_are_Datastreams)
    * [Setting up Virtual Pins](#Setting_up_Virtual_Pins)
4. [Setting up Web Dashboard](#Setting_up_Web_Dashboard)
5. [Creating and Setting up Devices](#Devices)
    * [Through Auth Token](#AuthToken)
    * [Through Mobile App](#MobileApp)
6. [Coding](#Coding)
    * [Adding Libraries](#Libraries)
    * Making a basic LED control project

***
## <a name="Account"></a>1. Account

First you have to go to the [Blynk Site](https://blynk.cloud/dashboard/login) site, and make an account.

After you have logged in to your Blynk account, you will be able to see a dashboard like this:

[![image](/my_blogs/images/blynk/dashboard.png)](/my_blogs/images/blynk/dashboard.png)

***
## <a name="Templates"></a>2. Templates
Before creating a device, you need to create a template.
### <a name="What_are_Templates"></a>&emsp; What are Templates?
At first, you have to create a template for each type of device you have. For example, in this tutorial, we will control an LED through a button on your smartphone or laptop. At first we will make a template for a light, then we can make a device called light and tell that it belongs to this template.\
Creating templates is somewhat like defining objects in programming and creating devices is like making instances of those objects. **There can be multiple devices under the same template.**

### <a name="How_to_Create_Templates"></a>&emsp; How to Create Templates?
To create a template, first click on the new template button on the dashboard and fill up the form. I am using a NodeMCU which is based on the *ESP8266* microchip. So, I have put **"Hardware = ESP8266"**.\
This is how mine looks:

[![image](/my_blogs/images/blynk/templates1.png)](/my_blogs/images/blynk/templates1.png)

Finally click on <button style="background-color: #47cfa2;border-radius:5px;border:none;padding:5px 15px 5px 15px">Done</button> button to create the template.\
After creating the template, you will see something like this:

[![image](/my_blogs/images/blynk/templates2.png)](/my_blogs/images/blynk/templates2.png)

Under the *Info* tab, you can further edit the data you have just entered along with some other fileds.

<a name="Infos">&emsp;</a> **Note** that we are given 2 informations (BLYNK_TEMPLATE_ID and BLYNK_DEVICE_NAME) under this Info tab. We will need those two pieces of informations later. So, we will return to this Info tab again while writing the code.

Editing the *Metadata* tab is not essencial for device setup. So let us skip it and move on to the *Datastreams* tab.

***
## <a name="Datastreams"></a>3. Datastreams
**According to Blynk:** Datastreams is a way to structure data that regularly flows in and out from device. Use it for sensor data, any telemetry, or actuators.

### <a name="What_are_Datastreams"></a>&emsp; What are Datastreams?
Datastreams are the channels of data that will be shared between the devices. There are various sorts of datastreams:

**Digital and Analog Datastreams:** Digital and Analog Datastreams are generally used to read data from the sensors. Setting up such a datastream might let you read temperature data from your device with a temperature sensor and view it on your smartphone. It might also be symultaneously used to automatically turn on the AC when the temperature reaches a certain value.
<br>

**Virtual Pins:** These pins do not have any physical existence. They are mere buttons or sliders on your smartphone/laptop screen which helps you to manually interact with these devices at your own will. Such a datastream will let you set up a virtual button on your smartphone whose value you can controll manually. Thus you can setup an LED to turn on when the value of that virtual pin is 1 and turn off when that is 0. We can avail **255 virtual pins** in the Blynk IoT platform.
<h6 style="color: red;">*Number of possible Digital and Analog Datastreams depends on the device you are using.</h6>

**In this tutorial, we will concentrate on "Virtual Pins" only.** 

### <a name="Setting_up_Virtual_Pins"></a>&emsp; Setting up Virtual Pins

To setup a Virtual Pin, navigate to the Datastream tab, **hover** on the <button style="background-color: #47cfa2;border-radius:5px;border:none;padding:7px">**+** New Datastream</button> button and select **Virtual Pin**. Next, fill up the form.\
I have taken Virtual Pin **V0** (available V0-V255). Here we will controll an LED by reading the value from this pin. It has only two states (i.e.: on and off). So we will set datatype as **Integer** and set the minimum and maximum values to be **0 and 1**. Default value is your choice!

Mine looks like this:

[![image](/my_blogs/images/blynk/datastream.png)](/my_blogs/images/blynk/datastream.png)

When done, click on <button style="background-color: #47cfa2;border-radius:5px;border:none;padding:7px">Create</button> button to create the datastream.

## <a name="Setting_up_Web_Dashboard"></a>4. Setting up Web Dashboard
This is the dashboard you will be using to control your devices. Though the web dashboard and the app dashboard works exactly the same way, you will have to setup both of them separately.&ensp;:(

Next move on to the *Web Dashboard* tab, drag and drop a switch in the working area (You might also like to add an LED which will show you the current state of the actual LED). You can resize the buttons. 

Finally click on the nut (settings) icon on the top left corner of the switch which you have just dragged and dropped onto your working area. Select the datastream you have just created and fill the rest of the informations according to your needs. **Save** it at the end.

I have filled it up like this:

[![image](/my_blogs/images/blynk/WebDashboard.png)](/my_blogs/images/blynk/WebDashboard.png)

If you have brought the LED to the workspace, which will show you the current state of the actual LED, you need to connect that to to the required datastream too (in my case V0). Click on the icon to do that.

This is how my Web Dashboard came up to be:

[![image](/my_blogs/images/blynk/WebDashboard2.png)](/my_blogs/images/blynk/WebDashboard2.png)

When you are done click <button style="background-color: #47cfa2;border-radius:5px;border:none;padding:5px 15px 5px 15px">Save</button> on the top right.
#### Congratulations! Your template is ready!

## <a name="#Devices"></a>5. Creating and Setting up Devices
Now that we have our template, we can create multiple devices from the same template. There are two ways of creating a device:

1. **Through Mobile App:** In this way, we won't upload the WiFi connecting credentials in the Code of the NodeMCU. After uploading the code, we will (sort of) login to the NodeMCU through Blynk Mobile App and enter the WiFi credentials there. You need to keep only the *BLYNK_TEMPLATE_ID* and *BLYNK_DEVICE_NAME* in the code. You will get that in the *Info* tab of the template (as mentioned [above](#Infos)). When the Blynk Mobile App connects to the device, it will automatically save the WiFi credentials and the Auth Token to the *EEPROM* of the NodeMCU. It will generate an Auth Token while creating a device.

2. **Through Auth Token:** The last method only worked with the help of Blynk Mobile App, but this process can be followed in both Mobile/PC. Here we will virtually create a device. Then we would be provided with an Auth Token. We would include ***Template ID***, ***Device Name***, ***Authorisation Token***, ***WiFi SSID*** and, ***WiFi Password*** in our code. Then the device will work without any further setup through both the Blynk App and the web interface.

We will learn both the processes in detail. We will only learn the second method (Through Auth Token) now. We will learn the Mobile App method while learning how to use the app towards the end of this page.


### <a name="AuthToken"></a>&emsp; Through Auth Token

Go to the search tab on the navigation bar on the left. 

[![image](/my_blogs/images/blynk/AuthToken1.png)](/my_blogs/images/blynk/AuthToken1.png)

Then Click on <button style="background-color: #47cfa2; border-radius:5px;border:none;padding:7px">**+** New Device</button> button and select to add a device from Template (the other options are not for us). Select the template name and name the device. I will use a green LED. So I kept the name of my device as **Green LED**.

Now, on the top right corner, you will see a pop up like this:

[![image](/my_blogs/images/blynk/AuthToken2.png)](/my_blogs/images/blynk/AuthToken2.png)

This contains all the informations which are needed to be put into the code apart from the WiFi credentials. 

### <b>What? You clicked on the cross by mistake?</b> &emsp;Don't worry, you can always find these informations under the *Device Info* tab. 

### <a name="MobileApp"></a>&emsp; Through Mobile App
We need to know about the code before setting up the device through MobileApp. So, please skip to [here](#...) if you know the coding part. the top right.

## <a name="#Coding"></a>6. Coding
We will complete the coding part in the **Arduino IDE**. At first, we need to install some libraries into it.

### <a name="Libraries"></a>&emsp; Installing Libraries

We would need to install *ESP8266 Board* and the *Blynk Library* in the Arduino IDE:
1. **ESP8266 Board:** In the Arduino IDE, go to:

* File -> Prefferences -> Paste this link ```http://arduino.esp8266.com/stable/package_esp8266com_index.json``` in *Additional Boards Manager URLs* field -> OK

[![image](/my_blogs/images/blynk/InstallBoard1.png)](/my_blogs/images/blynk/InstallBoard1.png)

...next in the Arduino IDE, go to:

* Tools -> Board: -> Board Manager... -> Search **"ESP8266"** -> install it -> Close it -> Again go to Tools -> Board: -> Select **"NodeMCU 1.0 (ESP-12E Module)"**

2. **Blynk Library:**
First click [**here ⬇**](https://github.com/blynkkk/blynk-library/archive/refs/heads/master.zip) to download the code from this GitHub repository [https://github.com/blynkkk/blynk-library](https://github.com/blynkkk/blynk-library/releases) as a **.ZIP** file.

Then in the Arduino IDE, go to:

* Sketch -> Include Library -> Add .ZIP Library... -> Select the downloaded .ZIP file -> Choose
