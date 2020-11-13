export class ServiceUtil {

  public static getSystemUser(): string {
    return 'SYSTEM';
  }

  public static getRegisteredCustomerDescription(): string {
    return 'Registered customer of the system';
  }

  public static getCreateCustomerDescription(): string {
    return 'Created customer of the system';
  }

  public static getUpdateCustomerDescription(): string {
    return 'Updated customer of the system';
  }

  public static getExternalCustomerType(): string {
    return 'External';
  }

  public static getCustomerTypes(): Array<string> {
    const customerTypes: Array<string> = [];
    customerTypes.push('External');
    customerTypes.push('Regular');
    console.debug('Customer Types: ', customerTypes);
    return customerTypes;
  }

  public static getCreateEmployeeDescription(): string {
    return 'Created employee of the system';
  }

  public static getUpdateEmployeedescription(): string {
    return 'Updated employee of the system';
  }

  public static getMrTitleType(): string {
    return 'Mr';
  }

  public static getNameTitlesTypes(): Array<string> {
    const nameTitleTypes: Array<string> = [];
    nameTitleTypes.push('Mr');
    nameTitleTypes.push('Mrs');
    nameTitleTypes.push('Miss');
    console.debug('Name Title Types: ', nameTitleTypes);
    return nameTitleTypes;
  }

  public static getMaleGenderType(): string {
    return 'Male';
  }

  public static getGenderTypes(): Array<string> {
    const genderTypes: Array<string> = [];
    genderTypes.push('Male');
    genderTypes.push('Female');
    genderTypes.push('Other');
    console.debug('Gender Types: ', genderTypes);
    return genderTypes;
  }

  public static getSingleCivilStatusType(): string {
    return 'Single';
  }

  public static getCivilStatusTypes(): Array<string> {
    const civilStatusTypes: Array<string> = [];
    civilStatusTypes.push('Single');
    civilStatusTypes.push('Married');
    console.debug('Civil Status Types: ', civilStatusTypes);
    return civilStatusTypes;
  }
}
