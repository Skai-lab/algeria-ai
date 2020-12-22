import React, { ReactNode } from "react";
import {
    Layout,
    Image,
    Drawer,
    Button,
    Row,
    Col,
    Typography,
    Form,
    Input,
} from "antd";
import {
    LinkedinOutlined,
    FacebookOutlined,
    InstagramOutlined,
    TwitterOutlined,
    YoutubeOutlined,
} from "@ant-design/icons";
import { Parallax } from "rc-scroll-anim";

import Logo from "../../assets/algeria-ai-logo.png";
import Algeria_Text from "../../assets/algeria-text.png";
import humberger from "../../assets/humburger.png";
import dzstartupimage from "../../assets/dz startup frame.png";
import mubashirimage from "../../assets/mubashir frame.png";
import skailabimage from "../../assets/skailab frame.png";
import limitlessimage from "../../assets/limitless frame.png";

const projects: { id: number; title: string; src: string; href: string }[] = [
    {
        id: 0,
        title: "algeria ai project",
        src: dzstartupimage,
        href: "http://dzstartups.com/",
    },
    {
        id: 1,
        title: "mubashir silicon valley",
        src: mubashirimage,
        href: "http://moubachirsiliconvalley.com",
    },
    {
        id: 2,
        title: "skailab websit",
        src: skailabimage,
        href: "http://skailab.algeria-ai.com/",
    },
    {
        id: 3,
        title: "limitless website",
        src: limitlessimage,
        href: "http://limitlessdz.com/",
    },
];

const FooterSection = () => (
    <Row justify="space-around">
        <Col>
            <Typography.Text style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                © 2020 Algeria AI
            </Typography.Text>{" "}
        </Col>
        <Col>
            <Row gutter={{ xs: 6, sm: 12, md: 18, lg: 28 }}>
                <Col>
                    <LinkedinOutlined style={{ fontSize: "2.6em" }} />
                </Col>
                <Col>
                    <FacebookOutlined style={{ fontSize: "2.6em" }} />
                </Col>
                <Col>
                    <InstagramOutlined style={{ fontSize: "2.6em" }} />
                </Col>
                <Col>
                    <TwitterOutlined style={{ fontSize: "2.6em" }} />
                </Col>
                <Col>
                    <YoutubeOutlined style={{ fontSize: "2.6em" }} />
                </Col>
            </Row>
        </Col>
    </Row>
);

const ContactUsHeader = () => (
    <div id="contact-us-header">
        <Typography.Title
            style={{
                textAlign: "center",
                fontSize: "3em",
                fontWeight: "bolder",
            }}
            level={2}
        >
            Register Now for AI Academy!
        </Typography.Title>
        <Typography.Paragraph
            style={{
                textAlign: "center",
                width: "50%",
                margin: "0 auto 0 auto",
                fontWeight: "bold",
            }}
        >
            Complete the form below and we’ll reach out to you with the proper
            forms to get you registered for AI Academy. We look forward to
            meeting!
        </Typography.Paragraph>
    </div>
);

const ContactUs = () => {
    const onFinish = (values: any) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <div style={{ marginTop: "4em", marginBottom: "3em" }}>
            <ContactUsHeader />
            <Form
                style={{
                    marginTop: "5em",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
                name="contact-us"
                layout="vertical"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Row style={{ minWidth: "100%" }} justify="space-between">
                    <Form.Item
                        label="First name"
                        name="first-name"
                        style={{ minWidth: "46%" }}
                        rules={[
                            {
                                required: true,
                                message: "Please input your first name",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Last name"
                        name="last-name"
                        style={{ minWidth: "46%" }}
                        rules={[
                            {
                                required: true,
                                message: "Please input your last name",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Row>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your email",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <div id="contact-form-submit-message-container">
                    <Form.Item
                        label="Message"
                        name="message"
                        rules={[
                            {
                                required: true,
                                message: "Please input your message",
                            },
                        ]}
                    >
                        <Input.TextArea style={{ height: "260px" }} />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit Form
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    );
};

const Projects = () => {
    let content: Array<ReactNode> = [];
    projects.forEach((element) => {
        content.push(
            <Col key={element.id} className="gutter-row" span={6}>
                <Parallax
                    animation={[
                        { x: 0, opacity: 1, playScale: [0, 0.6] },
                        { y: 1, playScale: [0, 0.3] },
                        { blur: "10px", playScale: [0, 0.5] },
                    ]}
                    style={{ opacity: 1 }}
                    className="code-box-shape"
                >
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={element.href}
                        title={element.title}
                    >
                        <Image
                            height={"100%"}
                            preview={false}
                            width={"100%"}
                            src={element.src}
                            alt={element.title}
                        />
                    </a>
                </Parallax>
            </Col>
        );
    });

    return (
        <Row
            wrap={false}
            gutter={{ xs: 2, sm: 16, md: 24, lg: 32 }}
            justify="center"
        >
            {content}
        </Row>
    );
};
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
                    title="Algeria ai side bar comming soon"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p>comming soon...</p>
                    <p>comming soon...</p>
                    <p>comming soon...</p>
                </Drawer>
                <Layout.Header style={this.white}>
                    <Parallax
                        animation={[
                            { x: 0, opacity: 1, playScale: [0, 0.7] },
                            { y: 1, playScale: [0, 0.3] },
                            { blur: "10px", playScale: [0, 0.5] },
                        ]}
                        style={{ opacity: 1 }}
                        className="code-box-shape"
                    >
                        <Row justify="space-between">
                            <Col>
                                <Image
                                    id="logo"
                                    preview={false}
                                    width={60}
                                    src={Logo}
                                />
                            </Col>
                            <Col>
                                <Image
                                    id="sublogo"
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
                                            id="header-button"
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
                    </Parallax>
                </Layout.Header>
                <Layout.Content style={this.cards_style}>
                    <Projects />

                    <div>
                        <ContactUs />
                    </div>
                </Layout.Content>
                <Layout.Footer style={this.white}>
                    <FooterSection />
                </Layout.Footer>
            </Layout>
        );
    }
}

export default Home;
