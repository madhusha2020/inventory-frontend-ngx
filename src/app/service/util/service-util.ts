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

  public static getNewCustomerType(): string {
    return 'New';
  }

  public static getCustomerTypes(): Array<string> {
    const customerTypes: Array<string> = [];
    customerTypes.push('New');
    customerTypes.push('Regular');
    customerTypes.push('Loyalty');
    console.debug('Customer Types: ', customerTypes);
    return customerTypes;
  }

}
