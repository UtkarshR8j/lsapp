{       
    apps:            
       [{
         name: "longstraw carbon",          
         script: "manage.py",
         args: ["runserver", "0.0.0.0:8000"], 
         exec_mode: "fork", 
         instances: "1", 
         wait_ready: true, 
         autorestart: false, 
         max_restarts: 5, 
         interpreter : "python" 
       }] 
 } 