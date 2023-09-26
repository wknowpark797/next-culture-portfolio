import clsx from 'clsx';
import styles from './Table.module.scss';

export function Table({ data = [], className }) {
	if (data.length === 0) return;

	return (
		<>
			<table className={clsx(styles.table, className)}>
				<thead>
					<tr>
						{Object.keys(data[0]).map((key) => (
							<th key={key}>{key}</th>
						))}
					</tr>
				</thead>

				<tbody>
					{data.map((el, idx) => (
						<tr key={idx}>
							{Object.values(el).map((val, idx) => (
								<td key={idx}>{val}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}
