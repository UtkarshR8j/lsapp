module.exports= {       
    apps:            
       [{
         name: "lscarbon",          
         script: "/home/ec2-user/lsapp/manage.py",
         args: ["runserver", "0.0.0.0:80"], 
         exec_mode: "fork", 
         instances: "1", 
         wait_ready: true, 
         autorestart: false, 
         max_restarts: 5, 
         interpreter : "python" 
       }] 
 } 