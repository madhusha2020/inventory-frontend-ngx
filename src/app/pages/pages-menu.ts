import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    data: 'INV',
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    data: 'INV',
    title: 'Shop',
    icon: 'compass-outline',
    link: '/pages/shop',
  },
  {
    data: 'INV-CUS,INV-EMP,INV-SUP,INV-TRS,INV-USR,INV-ROL',
    title: 'PEOPLE',
    group: true,
  },
  {
    data: 'INV-CUS',
    title: 'Customer',
    icon: 'people-outline',
    children: [
      {
        data: 'INV-CUS-VW',
        title: 'Customers',
        link: '/pages/customer/main',
      },
      {
        data: 'INV-CUS-CR',
        title: 'Create Customer',
        link: '/pages/customer/create',
      }
    ]
  },
  {
    data: 'INV-EMP',
    title: 'Employee',
    icon: 'briefcase-outline',
    children: [
      {
        data: 'INV-EMP-VW',
        title: 'Employees',
        link: '/pages/employee/main',
      },
      {
        data: 'INV-EMP-CR',
        title: 'Create Employee',
        link: '/pages/employee/create',
      }
    ]
  },
  {
    data: 'INV-SUP',
    title: 'Supplier',
    icon: 'shopping-bag-outline',
    children: [
      {
        data: 'INV-SUP-VW',
        title: 'Suppliers',
        link: '/pages/supplier/main',
      },
      {
        data: 'INV-SUP-CR',
        title: 'Create Supplier',
        link: '/pages/supplier/create',
      }
    ]
  },
  {
    data: 'INV-TRS',
    title: 'Transport',
    icon: 'car-outline',
    children: [
      {
        data: 'INV-TRS-VW',
        title: 'Transports',
        link: '/pages/transport/main',
      },
      {
        data: 'INV-TRS-CR',
        title: 'Create Transport',
        link: '/pages/transport/create',
      }
    ]
  },
  {
    data: 'INV-USR',
    title: 'User',
    icon: 'person-outline',
    children: [
      {
        data: 'INV-USR-VW',
        title: 'Users',
        link: '/pages/user/main',
      }
    ]
  },
  {
    data: 'INV-ROL',
    title: 'Role',
    icon: 'person-done-outline',
    children: [
      {
        data: 'INV-ROL-VW',
        title: 'Roles',
        link: '/pages/user/role-main',
      },
      {
        data: 'INV-ROL-CR',
        title: 'Create Role',
        link: '/pages/user/role',
      },
    ]
  },
  {
    data: 'INV-ITM,INV-INV',
    title: 'INVENTORY',
    group: true,
  },
  {
    data: 'INV-ITM',
    title: 'Chemical',
    icon: 'trash-outline',
    children: [
      {
        data: 'INV-ITM-VW',
        title: 'Chemicals',
        link: '/pages/item/main',
      },
      {
        data: 'INV-ITM-CR',
        title: 'Create Chemical',
        link: '/pages/item/create',
      },
    ]
  },
  {
    data: 'INV-INV',
    title: 'Inventory',
    icon: 'cube-outline',
    children: [
      {
        data: 'INV-INV-VW',
        title: 'Product Inventory',
        link: '/pages/inventory/main',
      },
      {
        data: 'INV-INV-IN-VW',
        title: 'Product Inbounds',
        link: '/pages/inventory/inbound-main',
      },
      {
        data: 'INV-INV-OUT-VW',
        title: 'Product Outbounds',
        link: '/pages/inventory/outbound-main',
      },
    ]
  },
  {
    data: 'INV-INV',
    title: 'Disposal',
    icon: 'sync-outline',
    children: [
      {
        data: 'INV-INV-DIS-VW',
        title: 'Disposal Products',
        link: '/pages/inventory/disposal-main',
      },
      {
        data: 'INV-INV-DIS-CR',
        title: 'Create Disposal',
        link: '/pages/inventory/disposal-create',
      },
    ]
  },
  {
    data: 'INV-SLE,INV-ORD,INV-PO,INV-GRN,INV-GRN-RET,INV-GRN-REF,INV-PAY',
    title: 'TRANSACTION',
    group: true,
  },
  {
    data: 'INV-SLE',
    title: 'Sale',
    icon: 'layers-outline',
    children: [
      {
        data: 'INV-SLE-VW',
        title: 'Sales',
        link: '/pages/sale/main',
      },
    ]
  },
  {
    data: 'INV-ORD',
    title: 'Order',
    icon: 'shopping-cart-outline',
    children: [
      {
        data: 'INV-ORD-ALL',
        title: 'All Orders',
        link: '/pages/order/main-all',
      },
      {
        data: 'INV-ORD-VW',
        title: 'Your Orders',
        link: '/pages/order/main',
      },
    ]
  },
  {
    data: 'INV-DEL',
    title: 'Delivery',
    icon: 'car-outline',
    children: [
      {
        data: 'INV-DEL',
        title: 'Deliveries',
        link: '/pages/delivery/main',
      },
    ]
  },
  {
    data: 'INV-PO',
    title: 'Purchase Order',
    icon: 'file-add-outline',
    children: [
      {
        data: 'INV-PO-CR',
        title: 'Create Purchase Order',
        link: '/pages/purchase-order/create',
      },
      {
        data: 'INV-PO-ALL',
        title: 'All Purchase Orders',
        link: '/pages/purchase-order/main-all',
      },
      {
        data: 'INV-PO-VW',
        title: 'Your Purchase Orders',
        link: '/pages/purchase-order/main',
      },
    ]
  },
  {
    data: 'INV-GRN',
    title: 'GRN',
    icon: 'diagonal-arrow-left-down-outline',
    children: [
      {
        data: 'INV-GRN-VW',
        title: 'GRNs',
        link: '/pages/grn/main',
      },
      // {
      //   data: 'INV-GRN-CR',
      //   title: 'Create GRN',
      //   link: '/pages/grn/create',
      // },
    ]
  },
  {
    data: 'INV-GRN-RET',
    title: 'Return',
    icon: 'diagonal-arrow-right-up-outline',
    children: [
      {
        data: 'INV-GRN-RET-VW',
        title: 'Supplier Returns',
        link: '/pages/grn/return',
      },
      // {
      //   data: 'INV-GRN-RET-CR',
      //   title: 'Create Return',
      //   link: '/pages/grn/create-return',
      // },
    ]
  },
  {
    data: 'INV-GRN-REF',
    title: 'Refund',
    icon: 'file-remove-outline',
    children: [
      {
        data: 'INV-GRN-REF-VW',
        title: 'Supplier Refunds',
        link: '/pages/grn/refund',
      },
      // {
      //   data: 'INV-GRN-REF-CR',
      //   title: 'Create Refund',
      //   link: '/pages/grn/create-refund',
      // },
    ]
  },
  {
    data: 'INV-PAY',
    title: 'Payment',
    icon: 'checkmark-square-2-outline',
    children: [
      {
        data: 'INV-PAY-CUS-VW',
        title: 'Customer Payments',
        link: '/pages/payment/customer-main',
      },
      {
        data: 'INV-PAY-SUP-VW',
        title: 'Supplier Payments',
        link: '/pages/payment/supplier-main',
      },
    ]
  },
  {
    data: 'INV-TEST,INV-NTFY,INV-COM',
    title: 'MISCELLANEOUS',
    group: true,
  },
  {
    data: 'INV-TEST',
    title: 'Chemical Test',
    icon: 'shuffle-2-outline',
    children: [
      {
        data: 'INV-TEST-VW',
        title: 'Chemical Tests',
        link: '/pages/test/main',
      },
      // {
      //   data: 'INV-TEST-CR',
      //   title: 'Create Test',
      //   link: '/pages/test/create',
      // },
    ],
  },
  {
    data: 'INV-NTFY',
    title: 'Notification',
    icon: 'bell-outline',
    children: [
      {
        data: 'INV-NTFY-VW',
        title: 'Notifications',
        link: '/pages/notification/main',
      },
    ],
  },
  {
    data: 'INV-COM',
    title: 'Complain',
    icon: 'person-remove-outline',
    children: [
      {
        data: 'INV-COM-VW',
        title: 'Complains',
        link: '/pages/complain/main',
      },
      {
        data: 'INV-COM-CR',
        title: 'Create Complain',
        link: '/pages/complain/create',
      },
    ],
  },
  {
    data: 'INV-RPT',
    title: 'REPORTS',
    group: true,
  },
  {
    data: 'INV-RPT',
    title: 'Reports',
    icon: 'file-text-outline',
    children: [
      {
        data: 'INV-RPT-SLE',
        title: 'Sales Report',
        link: '/pages/report/sales-report',
      }
    ],
  },
  {
    data: 'INV',
    title: 'FEATURES',
    group: true,
  },
  {
    data: 'INV',
    title: 'IoT Dashboard',
    icon: 'shopping-cart-outline',
    link: '/pages/iot-dashboard',
  },
  {
    data: 'INV',
    title: 'Layout',
    icon: 'layout-outline',
    children: [
      {
        data: 'INV',
        title: 'Stepper',
        link: '/pages/layout/stepper',
      },
      {
        data: 'INV',
        title: 'List',
        link: '/pages/layout/list',
      },
      {
        data: 'INV',
        title: 'Infinite List',
        link: '/pages/layout/infinite-list',
      },
      {
        data: 'INV',
        title: 'Accordion',
        link: '/pages/layout/accordion',
      },
      {
        data: 'INV',
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
      },
    ],
  },
  {
    data: 'INV',
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        data: 'INV',
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        data: 'INV',
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
      {
        data: 'INV',
        title: 'Buttons',
        link: '/pages/forms/buttons',
      },
      {
        data: 'INV',
        title: 'Datepicker',
        link: '/pages/forms/datepicker',
      },
    ],
  },
  {
    data: 'INV',
    title: 'UI Features',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
    children: [
      {
        data: 'INV',
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        data: 'INV',
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        data: 'INV',
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        data: 'INV',
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
    ],
  },
  {
    data: 'INV',
    title: 'Modal & Overlays',
    icon: 'browser-outline',
    children: [
      {
        data: 'INV',
        title: 'Dialog',
        link: '/pages/modal-overlays/dialog',
      },
      {
        data: 'INV',
        title: 'Window',
        link: '/pages/modal-overlays/window',
      },
      {
        data: 'INV',
        title: 'Popover',
        link: '/pages/modal-overlays/popover',
      },
      {
        data: 'INV',
        title: 'Toastr',
        link: '/pages/modal-overlays/toastr',
      },
      {
        data: 'INV',
        title: 'Tooltip',
        link: '/pages/modal-overlays/tooltip',
      },
    ],
  },
  {
    data: 'INV',
    title: 'Extra Components',
    icon: 'message-circle-outline',
    children: [
      {
        data: 'INV',
        title: 'Calendar',
        link: '/pages/extra-components/calendar',
      },
      {
        data: 'INV',
        title: 'Progress Bar',
        link: '/pages/extra-components/progress-bar',
      },
      {
        data: 'INV',
        title: 'Spinner',
        link: '/pages/extra-components/spinner',
      },
      {
        data: 'INV',
        title: 'Alert',
        link: '/pages/extra-components/alert',
      },
      {
        data: 'INV',
        title: 'Calendar Kit',
        link: '/pages/extra-components/calendar-kit',
      },
      {
        data: 'INV',
        title: 'Chat',
        link: '/pages/extra-components/chat',
      },
    ],
  },
  {
    data: 'INV',
    title: 'Maps',
    icon: 'map-outline',
    children: [
      {
        data: 'INV',
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        data: 'INV',
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        data: 'INV',
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
      {
        data: 'INV',
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    data: 'INV',
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        data: 'INV',
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        data: 'INV',
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        data: 'INV',
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    data: 'INV',
    title: 'Editors',
    icon: 'text-outline',
    children: [
      {
        data: 'INV',
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        data: 'INV',
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    data: 'INV',
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        data: 'INV',
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
      {
        data: 'INV',
        title: 'Tree Grid',
        link: '/pages/tables/tree-grid',
      },
    ],
  },
  {
    data: 'INV',
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        data: 'INV',
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    data: 'INV',
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        data: 'INV',
        title: 'Login',
        link: '/auth/login',
      },
      {
        data: 'INV',
        title: 'Register',
        link: '/auth/register',
      },
      {
        data: 'INV',
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        data: 'INV',
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
