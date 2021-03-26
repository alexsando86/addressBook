import React from "react";
import { addrValue } from "./MakeAddr";
import styles from "./MakeAddr.module.css";

const AddrList = ({ friendName, phone, address }: addrValue) => {
	return (
		<>
			<tr>
				<td className={styles.name}>{friendName}</td>
				<td className={styles.phone}>{phone}</td>
				<td className={styles.address}>{address}</td>
			</tr>
		</>
	);
};

export default AddrList;
