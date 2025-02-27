import Layout from "../../components/layout";
import "../options.css";
import { useNavigate } from "react-router-dom";

export const Inventario = () => {
  const navigate = useNavigate();
  
  return (
    <Layout>
      <div style={{ padding: '20px' }}>
        <h1 style={{ marginBottom: '20px' }}>Inventario</h1>
        
      </div>
    </Layout>
  );
};
