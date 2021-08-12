public class meetUpAppInfoAutomator {
     @AuraEnabled(cacheable=true)
    //auto populates RegistrationCode__c with a randomized number thats 8 characters long
    public static void meetUpCodeAutomator(list<Meetup__c> trigCons) {
         final String chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
    String randStr = '';
    while (randStr.length() < 8) {
       Integer idx = Math.mod(Math.abs(Crypto.getRandomInteger()), chars.length());
       randStr += chars.substring(idx, idx+1);
       system.debug(randStr); 
    } 
        list<Meetup__c> targetCons = new list<Meetup__c>();
         for (Meetup__c con : trigCons) {
			 con.RegistrationCode__c = randStr;            
        } 
        
    }

    //auto populates meetUpRegistration__c Name Field with an auto number in the meetup app trigger
     public static void meetUpRegistrationAutomator(list<MeetupRegistration__c> trigCons) {
        
        for (MeetupRegistration__c con : trigCons) {
			con.Name = con.AutoNumberFill__c;       
        } 

    }

 //SOLVED WITH VALIDATION RULE
//doesn't allow meetUpRegistration if the meetup chosen doesn't have an open status
     public static void conditionalMeetUpRegistartion(list<MeetupRegistration__c> trigCons) {
        list<Meetup__c> targetCons = new list<Meetup__c>();
        
        for (MeetupRegistration__c con : trigCons) {
			if(con.Meetup__r.Status__c == 'Open'){
                insert con;
            }       
        } 
        
    }  
    
}