
export const AppMenus = {
    
	navbarTopRight: [],
	navbarTopLeft: [],
	navbarSideLeft: [
  {
    "path": "/home",
    "label": "Home",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/permissions",
    "label": "Permissions",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/productos",
    "label": "Productos",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/proveedores",
    "label": "Proveedores",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/roles",
    "label": "Roles",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/tallas",
    "label": "Tallas",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/users",
    "label": "Users",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }
],
	permissionslistheader: [
  {
    "label": "Permission Id",
    "align": "left",
    "sortable": false,
    "name": "permission_id",
    "field": "permission_id"
  },
  {
    "label": "Permission",
    "align": "left",
    "sortable": false,
    "name": "permission",
    "field": "permission"
  },
  {
    "label": "Role Id",
    "align": "left",
    "sortable": false,
    "name": "role_id",
    "field": "role_id"
  },
  {
    "label": "",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	productoslistheader: [
  {
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  },
  {
    "label": "Nombre",
    "align": "left",
    "sortable": false,
    "name": "nombre",
    "field": "nombre"
  },
  {
    "label": "Precio",
    "align": "left",
    "sortable": false,
    "name": "precio",
    "field": "precio"
  },
  {
    "label": "Material",
    "align": "left",
    "sortable": false,
    "name": "material",
    "field": "material"
  },
  {
    "label": "Tipo Id",
    "align": "left",
    "sortable": false,
    "name": "tipo_id",
    "field": "tipo_id"
  },
  {
    "label": "Tallas Id",
    "align": "left",
    "sortable": false,
    "name": "tallas_id",
    "field": "tallas_id"
  },
  {
    "label": "Proveedor Id",
    "align": "left",
    "sortable": false,
    "name": "proveedor_id",
    "field": "proveedor_id"
  },
  {
    "label": "Image",
    "align": "left",
    "sortable": false,
    "name": "image",
    "field": "image"
  },
  {
    "label": "",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	proveedoreslistheader: [
  {
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  },
  {
    "label": "Nombre",
    "align": "left",
    "sortable": false,
    "name": "nombre",
    "field": "nombre"
  },
  {
    "label": "Direccion",
    "align": "left",
    "sortable": false,
    "name": "direccion",
    "field": "direccion"
  },
  {
    "label": "Numero",
    "align": "left",
    "sortable": false,
    "name": "numero",
    "field": "numero"
  },
  {
    "label": "",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	roleslistheader: [
  {
    "label": "Role Id",
    "align": "left",
    "sortable": false,
    "name": "role_id",
    "field": "role_id"
  },
  {
    "label": "Role Name",
    "align": "left",
    "sortable": false,
    "name": "role_name",
    "field": "role_name"
  },
  {
    "label": "",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	tallaslistheader: [
  {
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  },
  {
    "label": "Color",
    "align": "left",
    "sortable": false,
    "name": "color",
    "field": "color"
  },
  {
    "label": "Disponibilidad",
    "align": "left",
    "sortable": false,
    "name": "disponibilidad",
    "field": "disponibilidad"
  },
  {
    "label": "",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	userslistheader: [
  {
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  },
  {
    "label": "Name",
    "align": "left",
    "sortable": false,
    "name": "name",
    "field": "name"
  },
  {
    "label": "Email",
    "align": "left",
    "sortable": false,
    "name": "email",
    "field": "email"
  },
  {
    "label": "Phone",
    "align": "left",
    "sortable": false,
    "name": "phone",
    "field": "phone"
  },
  {
    "label": "Photo",
    "align": "left",
    "sortable": false,
    "name": "photo",
    "field": "photo"
  },
  {
    "label": "User Role Id",
    "align": "left",
    "sortable": false,
    "name": "user_role_id",
    "field": "user_role_id"
  },
  {
    "label": "",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],

    exportFormats: {
        print: {
			label: 'Print',
			color: 'blue',
            icon: 'print',
            id: 'print',
            ext: 'print',
        },
        pdf: {
			label: 'Pdf',
			color: 'red',
            icon: 'picture_as_pdf',
            id: 'pdf',
            ext: 'pdf',
        },
        excel: {
			label: 'Excel',
			color: 'green',
            icon: 'grid_on',
            id: 'excel',
            ext: 'xlsx',
        },
        csv: {
			label: 'Csv',
			color: 'teal',
            icon: 'grid_on',
            id: 'csv',
            ext: 'csv',
        },
    },
    
}