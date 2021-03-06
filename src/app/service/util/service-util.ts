export class ServiceUtil {

  public static getStatusDescription(status: number): string {
    if (status == 1) {
      return 'Active';
    } else if (status == 2) {
      return 'Awaiting';
    } else if (status == 3) {
      return 'Rejected';
    } else if (status == 5) {
      return 'Pending';
    } else if (status == 7) {
      return 'Locked';
    } else if (status == 10) {
      return 'Suspend';
    }
  }

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

  public static getUpdateEmployeeDescription(): string {
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

  public static getMaintenanceStaffDesignation(): string {
    return 'Maintenance Staff';
  }

  public static getDeliveryDesignation(): string {
    return 'Delivery Staff';
  }

  public static getDesignations(): Array<string> {
    const designations: Array<string> = [];
    designations.push('Maintenance Staff');
    designations.push('Delivery Staff');
    designations.push('Management Staff');
    designations.push('Financial Staff');
    console.debug('Designations: ', designations);
    return designations;
  }

  public static getLowDangerLevel(): string {
    return 'Low';
  }

  public static getDangerLevels(): Array<string> {
    const dangerLevels: Array<string> = [];
    dangerLevels.push('Low');
    dangerLevels.push('Medium');
    dangerLevels.push('High');
    console.debug('Danger Levels: ', dangerLevels);
    return dangerLevels;
  }

  public static getKgUnitType(): string {
    return 'Kilogram';
  }

  public static getUnitTypes(): Array<string> {
    const unitTypes: Array<string> = [];
    unitTypes.push('Kilogram');
    unitTypes.push('Gram');
    unitTypes.push('Liter');
    unitTypes.push('Milliliter');
    console.debug('Unit Types: ', unitTypes);
    return unitTypes;
  }

  public static getOnlinePaymentType(): string {
    return 'online';
  }

  public static getCreateSupplierDescription(): string {
    return 'Created supplier of the system';
  }

  public static getUpdateSupplierDescription(): string {
    return 'Updated supplier of the system';
  }

  public static getLocalSupplierType(): string {
    return 'Local';
  }

  public static getSupplierTypes(): Array<string> {
    const supplierTypes: Array<string> = [];
    supplierTypes.push('Local');
    supplierTypes.push('Foreign');
    console.debug('Supplier Types: ', supplierTypes);
    return supplierTypes;
  }
}
