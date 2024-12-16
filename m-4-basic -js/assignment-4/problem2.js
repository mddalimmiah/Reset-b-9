

    
    // const mail='mddalimsaif@gmail.com';
    // // for(let i=0; i<=mail.length; i++){
    //     // console.log(mail[i], i)
    //   const mail2=mail.split('@');
    //  const mil3=mail2[0];
    //  const mil4=mail2[1]
    //  console.log(mil3 +' sent you an email from '  +mil4);

     
     function sendNotification(email) {
       
        if(typeof email !=='string' || email.indexOf('@')===-1){
            return 'Invalid Email';
        }
        
        const userEmail=email.split('@');
        const userName=userEmail[0];
        const domainName=userEmail[1];
        return userName +' sent you an email from '+domainName;
}

    const result=sendNotification('sadia8icloud.com');

    console.log(result);
    


