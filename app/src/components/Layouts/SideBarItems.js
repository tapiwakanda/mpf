export default {
  data: [
    {
      name: 'Clients',
      children: [
        {
          name: 'Add New',
          url: '/AddNew',
        },
        {
          name: 'List',
          url: '/ClientList',
        },
        {
          name: 'Edit',
          url: '/ClientEdit',
        },
      ],
    },
    {
      name: 'Policies',
      children: [
        {
          name: 'Upload Batch',
          url: '/AddNewBatch',
        },
        {
          name: 'Edit Policy',
          url: '/EditPolicy',
        },
        {
          name: 'List',
          url: '/PolicyList',
        },
      ],
    },
    {
      name: 'Reporting',
      children: [
        {
          name: 'Extracts',
          url: '/Extracts',
        },
        {
          name: 'Statements',
          url: '/Statements',
        },
        {
          name: 'Commutations',
          url: '/Commutations',
        },
        {
          name: 'PEP Clients',
          url: '/PepClients',
        },
      ],
    },
    {
      name: 'Communication',
      url: '/Communication',
    },
    {
      name: 'Admin',
      children: [
        {
          name: 'Add Users',
          url: '/AddNewUsers',
        },
        {
          name: 'User Audit Trail',
          url: '/UserAuditTrail',
        },
        {
          name: 'User Management',
          url: '/UserManagement',
        },
      ],
    },
  ],
}
