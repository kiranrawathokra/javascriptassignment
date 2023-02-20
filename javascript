FECTOREAL NUMBER
<html>
    <head>
        <script>
        var num=5,fec=1,i=1;
        while(num>= 0)
        {
            fec=fec*i;
            num--;
        } 
        document.write(fec);
        </script>       
    </head>
</html>
================================
<html>
    <head>
        <script>
        var num=6,fec=1;
        while(num>0)
        {
            fec*=num;
            num--;
        } 
        document.write(fec);
        </script>       
    </head>
</html>
=============================
PRIME NUMBER
<html>
    <head>
        
    </head>
    <body>
        <script>
        var num,temp=0,i,count=0;
        num=prompt("enter");
        temp=num;
        for(i=0;i<=num;i++)
        {
            if(num%i==0)
            {
            count++;
            }
        }
        if(count==2)
        {
            document.write("prime");
        }else{
            document.write("not prime")
        }
        </script>
    </body>
    </html>
========================================

hokraraj@123456
