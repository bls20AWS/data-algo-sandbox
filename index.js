<!--


____ _    ____ ____ ____ _ ___ _  _ _  _    ___  ____ ____ ____ ___ _ ____ ____           _ ____ _  _ ____ ____ ____ ____ _ ___  ___ 
|__| |    | __ |  | |__/ |  |  |__| |\/|    |__] |__/ |__| |     |  | |    |___    __     | |__| |  | |__| [__  |    |__/ | |__]  |  
|  | |___ |__] |__| |  \ |  |  |  | |  |    |    |  \ |  | |___  |  | |___ |___          _| |  |  \/  |  | ___] |___ |  \ | |     |  
                                                                                                                                     


-->
<script>
  //##################################################################
  //        traversing a tree - BFS
  //#################################################################
function travBFS(root){
    var q =[root];
    var arr= [];
    
    while(q.length){
        node = q.shift();
        res.push(node);
        if(node.right){
            q.push(node.right);
        }
        if(node.left){
            q.push(node.left);
        }
    }
    return arr;
}

  //##################################################################
  //        traversing a tree - DFS
  //#################################################################
function travDFS(root){
    var stack = [root];
    var arr= [];
    
    while(q.length){
        node = stack.pop[();
        res.push(node);
        if(node.right){
            stack.push(node.right);
        }
        if(node.left){
            stack.push(node.left);
        }
    }
    return arr;
}    
    
  //##################################################################
  //       reversing a linked List iteratively
  //#################################################################

function rev(head){
    var node = head;
    var prev = null
    var tmp = null;
    
    while(node){
        tmp = node.next;
        node.next = prev
        prev = node;
        node = tmp;
    }
    
    return prev;
}

</script>