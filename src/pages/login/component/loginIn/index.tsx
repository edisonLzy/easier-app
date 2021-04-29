import { message } from 'antd';
import ProForm, { ProFormText, ProFormCaptcha } from '@ant-design/pro-form';
import { MobileOutlined, MailOutlined } from '@ant-design/icons';

export default ({onSubmit}:{onSubmit:()=>Promise<any>}) => {
	return (
		<div
			style={{
				width: 330,
				margin: 'auto',
			}}
		>
			<h1>login</h1>
			<ProForm
				onFinish={async () => {
					await onSubmit();
					message.success('提交成功');
				}}
				submitter={{
					searchConfig: {
						submitText: '登录',
					},
					render: (_, dom) => dom.pop(),
					submitButtonProps: {
						size: 'large',
						style: {
							width: '100%',
						},
					},
				}}
			>
				<ProFormText
					fieldProps={{
						size: 'large',
						prefix: <MobileOutlined />,
					}}
					name="phone"
					placeholder="请输入手机号"
					rules={[
						{
							required: true,
							message: '请输入手机号!',
						},
						{
							pattern: /^1\d{10}$/,
							message: '不合法的手机号格式!',
						},
					]}
				/>
			</ProForm>
		</div>
	);
};

