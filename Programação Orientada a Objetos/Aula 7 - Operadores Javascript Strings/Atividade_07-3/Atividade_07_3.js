function proteger() {
    let email_original = getString("email");
    let email_first2 = email_original.slice(0, 2);
    let email_afterAT = email_original.slice(email_original.search("@"))

    let email_secured = email_first2 + "..." + email_afterAT;
    
    
    giveValue(email_secured, "saida");
    
}