import React from "react";
import { addrValue } from "./MakeAddr";
import styles from "./MakeAddr.module.css";

const AddrList = ({ friendName, phone, address, onRemove }: addrValue) => {
	return (
		<>
			<tr>
				<td className={styles.name}>{friendName}</td>
				<td className={styles.phone}>{phone}</td>
				<td className={styles.address}>{address}</td>
				<td className={styles.remove}><button type="button" data-friend-name={friendName} onClick={(event) => onRemove(event)}>삭제</button></td>
			</tr>
		</>
	);
};

export default AddrList;
