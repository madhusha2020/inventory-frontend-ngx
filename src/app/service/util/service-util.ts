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

}
