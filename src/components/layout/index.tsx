import { ThemedLayoutV2, ThemedSiderV2, ThemedTitleV2 } from "@refinedev/antd"
import Header from "./header"
import { BugOutlined } from "@ant-design/icons"
import logo from '../../images/logo.png'

const Layout = ({children}: React.PropsWithChildren) => {

  return (
    <ThemedLayoutV2 
    Header={Header}
    Title={(titleProps)=><ThemedTitleV2  {...titleProps} text="Vincere" icon={<img src={logo} alt="Logo" style={{ 
      width: '30px',
      padding: 'auto',
      marginBottom: '20px' // Add some spacing between logo and text
    }}/>}/>} >
        {children}
        
    </ThemedLayoutV2>
  )
}

export default Layout