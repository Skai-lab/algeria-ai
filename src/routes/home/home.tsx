import React from "react";
import { Layout, Image, Drawer, Button, Row, Col } from "antd";
import Logo from "../../assets/algeria-ai-logo.png";
import Algeria_Text from "../../assets/algeria-text.png";
import humberger from "../../assets/humburger.png";

class Home extends React.Component {
    state = {
        text: "",
        visible: false,
    };

    showDrawer = (): void => {
        this.setState({ visible: true });
    };

    onClose = (): void => {
        this.setState({ visible: false });
    };

    // typing on RIGHT hand side of =
    onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({ text: e.currentTarget.value });
    };
    render() {
        return (
            <Layout>
                <Drawer
                    title="Basic Drawer"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
                <Layout.Header style={{ backgroundColor:"white"}}>
                    <Row justify="space-around">
                        <Col>
                        <Image preview={false} width={60} src={Logo} />
                        </Col>
                        <Col>
                        <Image preview={false} width={150} src={Algeria_Text} style={{marginLeft:"2em", marginRight:"auto"}} />  
                        </Col>
                        <Col>
                        <Button icon={<Image preview={false} width={30} src={humberger} />} type="text" onClick={this.showDrawer}>
                           
                        </Button>
                        </Col>
                    </Row>                    
                </Layout.Header>
                <Layout.Content>Content</Layout.Content>
                <Layout.Footer>Footer</Layout.Footer>
            </Layout>
        );
    }
}

export default Home;
