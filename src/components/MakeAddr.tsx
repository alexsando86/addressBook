import React, { useState, useEffect } from "react";
import AddrList from "./AddrList";
import styles from "./MakeAddr.module.css";

export interface addrValue {
	friendName: string;
	phone: string;
	address: string;
}

const MakeAddr = ({ addressDB }: any) => {
	const [selectValue, setSelectValue] = useState<string>('');
	const [data, setData] = useState<any>({});
	const [inputValue, setInputValue] = useState<addrValue>({
		friendName: "",
		phone: "",
		address: "",
	});
	const { friendName, phone, address } = inputValue;

	// input value 변경값을 저장.
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue({
			...inputValue,
			[event.target.name]: event.target.value,
		});
	};

	// select 선택시 텍스트값을 저장.
	const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectIdx = event.target.options.selectedIndex;
		setSelectValue(event.target.options[selectIdx].text);
	};

	// 친구추가 data update
	const onAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if(friendName && selectValue){
			addressDB.update(selectValue, friendName, phone, address);
			setData({
				...data,
				[selectValue]: {
					...data[selectValue],
					friendName, phone, address
				}
			})
		}
	}

	// initial data loading
	useEffect(() => {
		addressDB.read(selectValue, (val: any) => {
			setData(val);
		});
	}, [addressDB, selectValue,]);


	return (
		<>
			<div className={styles.makeAddr}>
				<div className={`${styles.select} ${styles.forms}`}>
					<select required defaultValue={"DEFAULT"} onChange={onSelectChange} className="selectUser">
						<option value="DEFAULT" disabled hidden>
							대상을 선택하세요
						</option>
						<option value="jacob">육상현</option>
						<option value="zzang">짱짱이</option>
					</select>
				</div>
				<div className={`${styles.name} ${styles.forms}`}>
					<input type="text" name="friendName" value={friendName} autoComplete="off" placeholder="이름" onChange={onChange} />
				</div>
				<div className={`${styles.phone} ${styles.forms}`}>
					<input type="tel" name="phone" value={phone} pattern="[0-9]" autoComplete="off" placeholder="전화번호" onChange={onChange} />
				</div>
				<div className={`${styles.addr} ${styles.forms}`}>
					<input type="text" name="address" value={address} autoComplete="off" placeholder="주소" onChange={onChange} />
				</div>
				<button type="button" onClick={onAdd}>추가</button>
			</div>
			{
				selectValue &&
				<>
					<h3 className={styles.userName}>{selectValue}님의 주소록</h3>
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
								{Object.keys(data!).map((item) => {
									const { friendName, phone, address } = data![item];
									return <AddrList key={item} friendName={friendName} phone={phone} address={address} />;
								})}
							</tbody>
						</table>
					</div>
				</>
			}
		</>
	);
};

export default MakeAddr;
