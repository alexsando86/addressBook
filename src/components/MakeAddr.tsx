import React, { useState, useEffect } from "react";
import AddrList from "./AddrList";
import styles from "./MakeAddr.module.css";

export interface addrValue {
	name: string;
	phone: string;
	address: string;
}

const MakeAddr = ({ addressDB }: any) => {
	const [selectValue, setSelectValue] = useState("");
	const [data, setData] = useState(null);
	const [value, setValue] = useState<addrValue>({
		name: "",
		phone: "",
		address: "",
	});
	const { name, phone, address } = value;

	// input value값을 저장.
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue({
			...value,
			[event.target.name]: event.target.value,
		});
	};

	// select 선택시 텍스트값을 저장.
	const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectIdx = event.target.options.selectedIndex;
		setSelectValue(event.target.options[selectIdx].text);
	};

	// initial data loading
	useEffect(() => {
		addressDB.read(selectValue, (val: any) => {
			setData(val);
		});
	}, [addressDB, selectValue]);

	return (
		<>
			<div className={styles.makeAddr}>
				<div className={`${styles.select} ${styles.forms}`}>
					<select required defaultValue={"DEFAULT"} onChange={onSelectChange}>
						<option value="DEFAULT" disabled hidden>
							대상을 선택하세요
						</option>
						<option value="jacob">육상현</option>
						<option value="zzang">짱짱이</option>
					</select>
				</div>
				<div className={`${styles.name} ${styles.forms}`}>
					<input type="text" name="name" value={name} placeholder="이름" onChange={onChange} />
				</div>
				<div className={`${styles.phone} ${styles.forms}`}>
					<input type="tel" name="phone" value={phone} placeholder="전화번호" onChange={onChange} />
				</div>
				<div className={`${styles.addr} ${styles.forms}`}>
					<input type="text" name="address" value={address} placeholder="주소" onChange={onChange} />
				</div>
				<button type="button">추가</button>
			</div>
			<div className={styles.addressList}>
				<table>
					<thead>
						<tr>
							<th>이름</th>
							<th>전화번호</th>
							<th>주소</th>
						</tr>
					</thead>
					<tbody>
						{Object.keys(data! || {}).map((item) => {
							const { name, phone, address } = data![item];
							console.log(name, phone, address);
							return <AddrList key={item} name={name} phone={phone} address={address} />;
						})}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default MakeAddr;
