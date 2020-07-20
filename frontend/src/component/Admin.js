import React, { useState, useEffect, useRef } from 'react';
import { Form, Input, InputNumber, Modal, Button, Avatar, Typography,DatePicker } from 'antd';
import { SmileOutlined, UserOutlined } from '@ant-design/icons';
import "../css/admin.css"
import {addActivity} from "../service/AdminService";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

// interface ModalFormProps {
//     visible: boolean;
//     onCancel: () => void;
// }

// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({ form, visible }) => {
    const prevVisibleRef = useRef();
    useEffect(() => {
        prevVisibleRef.current = visible;
    }, [visible]);
    const prevVisible = prevVisibleRef.current;
    useEffect(() => {
        if (!visible && prevVisible) {
            form.resetFields();
        }
    }, [visible]);
};

const ModalForm = ({ daycnt,classcnt,visible, onCancel }) => {
    let i;
    const [form] = Form.useForm();

    useResetFormOnCloseModal({
        form,
        visible,
    });

    const onOk = () => {
        form.submit();
    };

    const item = [];
    item.push(
        <Form form={form} layout="vertical" name="userForm">
            <Form.Item name="website"
                       label="website"
                       rules={[{required: true}]}
            >
                <Input/>
            </Form.Item>
        </Form>
    );

    for (i = 0; i < classcnt*daycnt; i++) {
        if(i%classcnt===0){
            item.push(
                <Form form={form} layout="vertical" name="userForm">
                    <Form.Item name={"day" + (Math.floor(i / classcnt) + 1)}
                               label={"day" + (Math.floor(i / classcnt) + 1)}
                               rules={[{required: true}]}
                    >
                        <Input/>
                        {/*<DatePicker style={{ width: '50%' }} />*/}
                    </Form.Item>
                </Form>
            )
        }
        item.push(
            <Form form={form} layout="vertical" name="userForm">
                <Form.Item name={"day"+(Math.floor(i/classcnt)+1)+"class"+(i%classcnt+1)}
                           label={"day"+(Math.floor(i/classcnt)+1)+"class"+(i%classcnt+1)}
                           rules={[{required: true}]}>
                    <InputNumber/>
                </Form.Item>
            </Form>
        );
    }


    return (
        <Modal title="Basic Drawer" visible={visible} onOk={onOk} onCancel={onCancel}>
            {/*<Form form={form} layout="vertical" name="userForm">*/}
            {/*    <Form.Item name="name" label="User Name" rules={[{ required: true }]}>*/}
            {/*        <Input />*/}
            {/*    </Form.Item>*/}
            {/*    <Form.Item name="age" label="User Age" rules={[{ required: true }]}>*/}
            {/*        <InputNumber />*/}
            {/*    </Form.Item>*/}
            {/*</Form>*/}
            {item}
        </Modal>
    );
};
const Demo = () => {
    const [visible, setVisible] = useState(false);

    const [u, setU] = useState([]);

    const [daycnt, setDaycnt] = useState(0);

    const [classcnt, setClasscnt] = useState(0);

    const showUserModal = () => {
        setVisible(true);
    };

    const hideUserModal = () => {
        setVisible(false);
    };

    const onFinish = values => {
        console.log('Finish:', values);
        console.log('users:',u);
        // let activity=[];
        // activity.push(values);
        // activity.push(u);
        var arr = [];
        arr.push(u.length);
        arr.push(daycnt);
        arr.push(classcnt);
        for (let i in values) {
            arr.push(values[i]); //属性
            //arr.push(obj[i]); //值
        }
        for(let i in u){
            for(let j in u[i]){
                arr.push(u[i][j])
            }
        }
        // arr=arr.concat(u);
        console.log("activity:"+JSON.stringify(arr));
        addActivity(JSON.stringify(arr),(res)=>{console.log(res)})
    };

    const onFinishcnt = values => {
        console.log('Success:', values);
        console.log(classcnt);
        console.log(daycnt);
        setClasscnt(values.classcnt);
        setDaycnt(values.daycnt);
    };



    return (
        <>
            <Form
                {...layout}
                name="cnt"
                initialValues={{ remember: true }}
                onFinish={onFinishcnt}
            >
                <Form.Item
                    label="day count"
                    name="daycnt"
                    rules={[{ required: true}]}
                >
                    <InputNumber min={1} max={10}/>
                </Form.Item>

                <Form.Item
                    label="class count"
                    name="classcnt"
                    rules={[{ required: true}]}
                >
                    <InputNumber min={1} max={5}/>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        SET CNT
                    </Button>
                </Form.Item>
            </Form>

            {/*{value1}*/}
            <Form.Provider
                onFormFinish={(name, { values, forms }) => {
                    if (name === 'userForm') {
                        const { basicForm } = forms;
                        let users = basicForm.getFieldValue('users') || [];
                        // console.log("users:"+JSON.stringify(users));
                        // console.log("value:"+JSON.stringify(values));
                        basicForm.setFieldsValue({ users: [...users, values] });
                        users=basicForm.getFieldValue('users') || [];
                        console.log("usersNew:"+JSON.stringify(users));
                        setVisible(false);
                        setU(users);
                    }
                }}
            >
                <Form {...layout} name="basicForm" onFinish={onFinish}>

                    <Form.Item name="title" label="title" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="actor" label="actor" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="timescale" label="timescale" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="venue" label="venue" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item
                        // rules={[{ required: true }]}
                        // name="users"
                        label="Website List"
                        shouldUpdate={(prevValues, curValues) => prevValues.users !== curValues.users}
                        // shouldUpdate={true}
                    >
                        {({ getFieldValue }) => {
                            const users = getFieldValue('users') || [];
                            console.log("user:"+JSON.stringify(users));

                            return users.length ? (
                                <ul>
                                    {users.map((user, index) => (
                                        <li key={index} className="user">
                                            {/*<Avatar icon={<UserOutlined />} />*/}
                                            {user.website}
                                            {/*- {user.day}*/}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <Typography.Text className="ant-form-text" type="secondary">
                                    ( <SmileOutlined /> No website yet. )
                                </Typography.Text>
                            );
                        }}
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button htmlType="submit" type="primary">
                            Submit
                        </Button>
                        <Button htmlType="button" style={{ margin: '0 8px' }} onClick={showUserModal}>
                            Add Website
                        </Button>
                    </Form.Item>

                </Form>

                <ModalForm visible={visible} onCancel={hideUserModal} daycnt={daycnt} classcnt={classcnt}/>
            </Form.Provider>
        </>
    );
};
export class Admin extends React.Component{

    render() {
        return (
            <Demo/>
        );
    }
}
// export class Admin extends React.Component{
//
//     render() {
//         return (
//             <Form name="dynamic_form_item" {...formItemLayoutWithOutLabel} onFinish={onFinish}>
//                 <Form.List name="names">
//                     {(fields, { add, remove }) => {
//                         return (
//                             <div>
//                                 {fields.map((field, index) => (
//                                     <Form.Item
//                                         {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
//                                         label={index === 0 ? 'Passengers' : ''}
//                                         required={false}
//                                         key={field.key}
//                                     >
//                                         <Form.Item
//                                             {...field}
//                                             validateTrigger={['onChange', 'onBlur']}
//                                             rules={[
//                                                 {
//                                                     required: true,
//                                                     whitespace: true,
//                                                     message: "Please input passenger's name or delete this field.",
//                                                 },
//                                             ]}
//                                             noStyle
//                                         >
//                                             <Input placeholder="passenger name" style={{ width: '60%' }} />
//                                         </Form.Item>
//                                         {fields.length > 1 ? (
//                                             <MinusCircleOutlined
//                                                 className="dynamic-delete-button"
//                                                 style={{ margin: '0 8px' }}
//                                                 onClick={() => {
//                                                     remove(field.name);
//                                                 }}
//                                             />
//                                         ) : null}
//                                     </Form.Item>
//                                 ))}
//                                 <Form.Item>
//                                     <Button
//                                         type="dashed"
//                                         onClick={() => {
//                                             add();
//                                         }}
//                                         style={{ width: '60%' }}
//                                     >
//                                         <PlusOutlined /> Add field
//                                     </Button>
//                                 </Form.Item>
//                             </div>
//                         );
//                     }}
//                 </Form.List>
//
//                 <Form.Item>
//                     <Button type="primary" htmlType="submit">
//                         Submit
//                     </Button>
//                 </Form.Item>
//             </Form>
//         );
//     }
//
// }