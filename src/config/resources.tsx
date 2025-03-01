
import { CopyOutlined, CarOutlined, HomeOutlined,TagOutlined, UserSwitchOutlined, LineChartOutlined } from "@ant-design/icons";

import { IResourceItem } from "@refinedev/core";

export const resources: IResourceItem[] = [
    {
        name: 'dashboard',
        list: '/',
        meta: {
            label: 'Inicio',
            icon: <HomeOutlined/>
        }
    },
    {
      name: 'pedidos',
      list: '/pedidos',
      meta: {
        label: 'Pedidos',
        icon: <CarOutlined />
      }
    },
    /*{
      name: 'Inventario',
      list: '/inventario',
      meta: {
        label: 'Inventario',
        icon: <CopyOutlined/>
      }
    }, */
    {
      name: 'Prediccion',
      list: '/prediccion',
      meta: {
        label: 'Prediccion',
        icon: <LineChartOutlined/>
      }
    },
    {
      name: 'usuarios',
      list: '/usuarios',
      show: '/usuarios/:id',
      meta: {
        label: 'Usuarios',
        icon: <UserSwitchOutlined/>
      }
    }
]