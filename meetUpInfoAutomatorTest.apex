@isTest
private class meetUpInfoAutomatorTest {
    
  
    
    
    @isTest static void testValidStatus() {
        Meetup__c target = new Meetup__c();
        target.Name = 'Bst Test';
        target.Status__c = 'Open';
        target.RegistrationLimit__c = 5;
        insert target;
        test.startTest();
        MeetupRegistration__c trig = new MeetupRegistration__c();
        trig.FirstName__c = 'Tester';
        trig.LastName__c = 'Dubs';
        trig.Meetup__c = target.Id;
        insert trig;
        list<MeetupRegistration__c> registerList = [SELECT Id FROM MeetupRegistration__c WHERE Meetup__r.Status__c = :'Open'];
        system.assertEquals(1, registerList.size());
        test.stopTest();
    }

}