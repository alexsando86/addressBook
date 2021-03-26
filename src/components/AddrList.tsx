import React from "react";
import { addrValue } from "./MakeAddr";
import styles from "./MakeAddr.module.css";

const AddrList = ({ name, phone, address }: addrValue) => {
	return (
		<>
			<tr>
				<td className={styles.name}>{name}</td>
				<td className={styles.phone}>{phone}</td>
				<td className={styles.address}>{address}</td>
			</tr>
		</>
	);
};

export default AddrList;
