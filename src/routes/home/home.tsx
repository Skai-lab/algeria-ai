import React from "react";
import { Layout, Image, Drawer, Button, Row, Col, Typography, Form, Input } from "antd";
import Logo from "../../assets/algeria-ai-logo.png";
import Algeria_Text from "../../assets/algeria-text.png";
import humberger from "../../assets/humburger.png";
import dzstartupimage from "../../assets/dz startup frame.png";
import mubashirimage from "../../assets/mubashir frame.png";
import skailabimage from "../../assets/skailab frame.png";
import limitlessimage from "../../assets/limitless frame.png";
const ContactUs = () =>{
    const onFinish = (values:any) => {
        console.log('Success:', values);
      };
    
    const onFinishFailed = (errorInfo:any) => {
        console.log('Failed:', errorInfo);
    };
    return(
    <Form
      name="contact-us"
      layout="vertical"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>


     

      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    )
}
class Home extends React.Component {
    state = {
        text: "",
        visible: false,
    };

    white = { backgroundColor: "white" };
    cards_style = { padding: "6em 5em 2em 5em", ...this.white };

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
                <Layout.Header style={this.white}>
                    <Row justify="space-between">
                        <Col>
                            <Image preview={false} width={60} src={Logo} />
                        </Col>
                        <Col>
                            <Image
                                preview={false}
                                width={150}
                                src={Algeria_Text}
                                style={{
                                    marginLeft: "2em",
                                    marginRight: "auto",
                                }}
                            />
                        </Col>
                        <Col>
                            <Button
                                icon={
                                    <Image
                                        preview={false}
                                        width={30}
                                        src={humberger}
                                    />
                                }
                                type="text"
                                onClick={this.showDrawer}
                            ></Button>
                        </Col>
                    </Row>
                </Layout.Header>
                <Layout.Content style={this.cards_style}>
                    <Row
                        wrap={true}
                        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                        justify="center"
                    >
                        <Col className="gutter-row" span={6}>
                            <Image
                                height={"100%"}
                                preview={false}
                                width={"100%"}
                                src={dzstartupimage}
                            />
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Image
                                height={"100%"}
                                preview={false}
                                width={"100%"}
                                src={mubashirimage}
                            />
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Image
                                height={"100%"}
                                preview={false}
                                width={"100%"}
                                src={skailabimage}
                            />
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Image
                                height={"100%"}
                                preview={false}
                                width={"100%"}
                                src={limitlessimage}
                            />
                        </Col>
                    </Row>

                    <div>
                        <Typography.Title level={2}>
                            Register Now for AI Academy!
                        </Typography.Title>
                        <Typography.Paragraph>
                            Complete the form below and we’ll reach out to you
                            with the proper forms to get you registered for AI
                            Academy. We look forward to meeting!
                        </Typography.Paragraph>
                        <ContactUs/>
                    </div>
                </Layout.Content>
                <Layout.Footer style={this.white}>Footer</Layout.Footer>
            </Layout>
        );
    }
}

export default Home;
