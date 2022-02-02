
class UserStorage{
    loginUsser(id, password){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                if (
                    (id === 'ellice' && password === 'dream') ||
                    (id === 'codder' && password === 'academy')

                ){

                   resolve(id);
                } else {
                    reject(new Error('not fount'));
                
                }
            }, 2000);
        });

    }
    getRoles(use ){
        return new Promise((resolve))
        setTimeout(()=>{
            if( user==='elice'){  
            onSuccess({name : 'ellice', role:'admin'});
        } else {
            onerror(new Error('no access'));
        }
        }, 1000);
    } 
    
}
