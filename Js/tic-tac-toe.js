    var count=0;
    var element;
    var turn;
    var arr =[[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
    var stack= new Array(9);
    var stack_top = -1;
    var max_moves = -1;
    function restart()
    {
        document.location.reload();
    }
    function dummy()
    {
        

    }
        function press(id)
        {
            if(document.getElementById(id).innerHTML=="Press")
            {
                count+=1;
                var val = -1;
                element=document.getElementById(id);
                turn=document.getElementById("turn");
                var x=id-1;
                var i=Math.floor(x/3);
                var j=x%3;
                if(count%2==0)
                    {
                        val = 0;
                        element.innerHTML="O";
                        element.style.backgroundColor= "magenta";
                        turn.innerHTML="Player 'X'";
                        arr[i][j]=val;
                        stack_top++;
                        max_moves =stack_top;
                        stack[stack_top] = id;
                    }
                 else
                    {
                        val = 1;
                        element.innerHTML="X";
                        element.style.backgroundColor="#F67373";
                        turn.innerHTML="Player 'O'";
                        arr[i][j]=val;
                        stack_top++;
                        max_moves =stack_top;
                        stack[stack_top] = id;
                    }
                    if(count>=5)
                        {
                        if(check_winner(id,val))
                            {
                                if(val == 0)
                                    alert('O Won');
                                        else
                                    alert('X Won');
                                setTimeout(dummy,400);
                                alert("Reload in 4 seconds");
                                setTimeout(restart,2000);   
                            } 
                        else if(count >= 9)
                            {
                            alert('Draw');
                            setTimeout(dummy,400);
                            alert("Reload in 4 seconds");
                            setTimeout(restart,2000);
                            }
                            
                        }
            }
            
        }
         function check_winner(id,val)
    {
        for(var i=0;i<3;i++)
        {
            if(arr[i][0] == val)
                if(arr[i][0] == arr[i][1] && arr[i][1] == arr[i][2])    
                        return 1;   
        }
        for(var j=0;j<3;j++)
        {
            if(arr[0][j] == val)
                if(arr[0][j] == arr[1][j] && arr[1][j] == arr[2][j] )   
                    return 1;
        }
        if(arr[1][1] == val)
            if((arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2])||(arr[2][0] == arr[1][1] && arr[1][1] == arr[0][2]))
            return 1;
        return 0;
            
    }
    function undo()
    {     if(stack_top >-1) 
        {
            var id = stack[stack_top--];
            element=document.getElementById(id);
            element.innerHTML="Press";
            element.style.backgroundColor="black";
            count--;
            if(count%2 == 0)
                turn.innerHTML="Player 'X'";
            else
                turn.innerHTML="Player 'O'";
            var x=id-1;
            var i=Math.floor(x/3);
            var j=x%3;
            arr[i][j] =-1
        }
    }

    function redo()
    {      if(stack_top<max_moves)
        {
             count++;
            var id = stack[++stack_top];
            var x=id-1;
            var i=Math.floor(x/3);
            var j=x%3;
            element=document.getElementById(id);
            if(count%2==0)
                    {
                        element.innerHTML="O";
                        element.style.backgroundColor="yellow";
                        turn.innerHTML="Player 'X'";
                        arr[i][j]=0;
                    }
                 else
                    {
                        element.innerHTML="X";
                        element.style.backgroundColor="white";
                        turn.innerHTML="Player 'O'";
                        arr[i][j]=1;
                    }
        }
    }   
