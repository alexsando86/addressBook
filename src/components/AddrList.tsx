import React from "react";
import { addrValue } from "./MakeAddr";
import styles from "./MakeAddr.module.css";

const AddrList = ({ friendName, phone, address, onRemove, onModify }: addrValue) => {
	return (
		<>
			<tr>
				<td className={styles.name}>{friendName}</td>
				<td className={styles.phone}>{phone}</td>
				<td className={styles.address}>{address}</td>
				<td className={styles.buttons}>
					<button type="button" onClick={() => onModify(friendName, phone, address)} className={styles.modify}>수정</button>
					<button type="button" onClick={() => onRemove(friendName)} className={styles.remove}>삭제</button>
					</td>
			</tr>
		</>
	);
};

export default AddrList;
